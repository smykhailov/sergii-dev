import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import Modal from "react-modal";
import { fonts, getConfig, TConfig, themes } from "@core/config";
import { nameOf } from "@core/operations";
import { parseNum } from "@core/parse";

import TextInput from "@components/common/text-input";
import SelectInput from "@components/common/select-input";

if (typeof window !== `undefined`) {
  Modal.setAppElement(document.body);
}

const SettingsDialog: FC<{
  isOpen: boolean;
  onClose: () => void;
  onApply: (settings: TConfig) => void;
}> = props => {
  const theme = useTheme();
  const [formData, setFormData] = useState(getConfig());

  const handleKeyPressEvent = useCallback(
    (event: KeyboardEvent | React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "Escape") {
        props.onClose();
      } else if (event.key === "Enter" || event.key === " ") {
        if ((event.currentTarget as HTMLElement)?.id === "close-button") {
          props.onClose();
        } else if (
          (event.currentTarget as HTMLElement)?.id === "apply-button"
        ) {
          props.onApply(formData);
        }
      }
    },
    []
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const newState = {
        ...prevState,
        [name]:
          event.target instanceof HTMLInputElement
            ? parseNum(value, name as keyof TConfig)
            : value,
      };

      return newState;
    });
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPressEvent);
    return () => {
      document.removeEventListener("keyup", handleKeyPressEvent);
    };
  }, []);

  return (
    <Modal
      isOpen={props.isOpen}
      style={modalDialogStyles(theme)}
      contentLabel="Settings"
      shouldCloseOnOverlayClick={false}
    >
      <HeaderContainer>
        <h1>Settings</h1>
        <CloseIcon
          id="close-button"
          role="button"
          onClick={props.onClose}
          onKeyPress={handleKeyPressEvent}
          title="Close (Esc)"
          tabIndex={0}
        ></CloseIcon>
      </HeaderContainer>
      <MainContainer>
        <SelectInput
          title={
            <>
              <span>General:</span> <strong>Theme</strong>
            </>
          }
          subTitle="Controls the color scheme of the site."
          onChange={handleChange}
          name={nameOf<TConfig>("theme")}
          value={formData.theme}
          data={themes}
        />

        <SelectInput
          title={
            <>
              <span>General:</span> <strong>Font Family</strong>
            </>
          }
          subTitle="Controls the font family of the site (except articles)."
          onChange={handleChange}
          name={nameOf<TConfig>("editorFontFace")}
          value={formData.editorFontFace}
          data={fonts}
        />

        <TextInput
          title={
            <>
              <span>General:</span> <strong>Font Size</strong>
            </>
          }
          subTitle="Controls the font size of controls (except articles)."
          onChange={handleChange}
          name={nameOf<TConfig>("editorFontSize")}
          value={formData.editorFontSize.toString()}
        />

        <SelectInput
          title={
            <>
              <span>Article:</span> <strong>Font Family</strong>
            </>
          }
          subTitle="Controls the font family of articles."
          onChange={handleChange}
          name={nameOf<TConfig>("articleFontFace")}
          value={formData.articleFontFace}
          data={fonts}
        />

        <TextInput
          title={
            <>
              <span>Article:</span> <strong>Font Size</strong>
            </>
          }
          subTitle="Controls the font size of articles."
          onChange={handleChange}
          name={nameOf<TConfig>("articleFontSize")}
          value={formData.articleFontSize.toString()}
        />
        <ActionContainer>
          <button
            onClick={() => props.onApply(formData)}
            onKeyPress={handleKeyPressEvent}
            id="apply-button"
            type="button"
          >
            Apply
          </button>
        </ActionContainer>
      </MainContainer>
    </Modal>
  );
};

const modalDialogStyles = (theme: Theme) => ({
  overlay: {
    zIndex: 1000,
    backgroundColor: theme.colors.modalOverlayColor,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
    border: "none",
    borderRadius: 0,
    backgroundColor: theme.colors.backgroundPrimary,
    color: theme.colors.textColor,
    fontFamily: theme.fontFace,
    fontSize: theme.fontSize,
    maxHeight: "80vh",
  },
});

const HeaderContainer = styled.header(props => ({
  display: "flex",
  justifyContent: "space-between",

  h1: {
    fontFamily: props.theme.fontFace,
    fontSize: "1.2em",
  },
}));

const MainContainer = styled.main({
  display: "flex",
  flexDirection: "column",
});

const ActionContainer = styled.footer(props => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 12,

  "& > button": {
    backgroundColor: props.theme.colors.gitalk.btnBackgroundColor,
    color: props.theme.colors.gitalk.btnTextColor,
    display: "inline-block",
    padding: "2px 14px",
    borderRadius: 0,
    border: "none",
    lineHeight: "inherit",
  },

  "& > button:hover": {
    backgroundColor: props.theme.colors.gitalk.btnBackgroundHoverColor,
    cursor: "pointer",
  },
}));

const CloseIcon = styled.a(props => ({
  position: "absolute",
  top: 0,
  right: 0,
  display: "block",
  width: 24,
  height: 24,
  margin: 16,
  borderRadius: 2,
  fontSize: 0,

  ":before, :after": {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 1,
    height: 16,
    backgroundColor: props.theme.colors.textColor,
    transform: "rotate(45deg) translate(-50%, -50%)",
    transformOrigin: "top left",
    content: '""',
  },
  ":after": {
    transform: "rotate(-45deg) translate(-50%, -50%)",
  },
  ":focus-visible": {
    outline: props.theme.colors.inputFocusOutline,
  },
  ":hover": {
    backgroundColor: props.theme.colors.closeButtonBackgroundActive,
    cursor: "pointer",
  },
}));

export default SettingsDialog;
