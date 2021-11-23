import React, { FC, useCallback, useEffect } from "react";
import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import Modal from "react-modal";

Modal.setAppElement(document.body);

const SettingsDialog: FC<{ isOpen: boolean; onClose: () => void }> = props => {
  const theme = useTheme();

  const handleCloseDialog = useCallback(
    (event: KeyboardEvent | React.KeyboardEvent<HTMLAnchorElement>) => {
      if (event.key === "Escape") {
        props.onClose();
      } else if (
        (event.currentTarget as HTMLAnchorElement)?.id === "close-button" &&
        (event.key === "Enter" || event.key === " ")
      ) {
        props.onClose();
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keyup", handleCloseDialog);
    return () => {
      document.removeEventListener("keyup", handleCloseDialog);
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
          onKeyPress={handleCloseDialog}
          title="Close (Esc)"
          tabIndex={0}
        ></CloseIcon>
      </HeaderContainer>
      <MainContainer>
        <FormControl tabIndex={0}>
          <label htmlFor="theme-selector">
            <span>General:</span> <strong>Theme</strong>
          </label>
          <span>Controls the color scheme of the site.</span>
          <select name="theme-selector" id="theme-selector">
            <option>Light</option>
            <option>Dark</option>
            <option>One Monokai</option>
            <option>High Contrast</option>
          </select>
        </FormControl>
        <FormControl tabIndex={0}>
          <label htmlFor="controls-font-family-selector">
            <span>General:</span> <strong>Font Family</strong>
          </label>
          <span>Controls the font family of the site (except articles).</span>
          <select
            name="controls-font-family-selector"
            id="controls-font-family-selector"
          >
            <option>Segoe UI</option>
          </select>
        </FormControl>
        <FormControl tabIndex={0}>
          <label htmlFor="controls-fontsize-selector">
            <span>General:</span> <strong>Font Size</strong>
          </label>
          <span>Controls the font size of controls (except articles).</span>
          <input
            name="controls-fontsize-selector"
            id="controls-fontsize-selector"
            type="text"
          />
        </FormControl>
        <FormControl tabIndex={0}>
          <label htmlFor="article-fontfamily-selector">
            <span>Article:</span> <strong>Font Family</strong>
          </label>
          <span>Controls the font size of articles.</span>
          <select
            name="article-fontfamily-selector"
            id="article-fontfamily-selector"
          >
            <option>Segoe UI</option>
          </select>
        </FormControl>
        <FormControl tabIndex={0}>
          <label htmlFor="article-fontsize-selector">
            <span>Article:</span> <strong>Font Size</strong>
          </label>
          <span>Controls the font size of articles.</span>
          <input
            name="article-fontsize-selector"
            id="article-fontsize-selector"
            type="text"
          />
        </FormControl>
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
    backgroundColor: theme.colors.main.backgroundColor,
    color: theme.colors.textColor,
  },
});

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",

  h1: {
    fontSize: "1.2em",
  },
});

const MainContainer = styled.main({
  display: "flex",
  flexDirection: "column",
});

const FormControl = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  padding: "12px 14px 18px",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: props.theme.colors.main.backgroundColor,
  fontSize: 13,

  ":hover": {
    backgroundColor: props.theme.colors.main.backgroundHoverColor,
    borderColor: props.theme.colors.main.backgroundHoverColor,
    borderStyle: "solid",
    borderWidth: 1,
  },

  ":active, :focus": {
    backgroundColor: props.theme.colors.main.backgroundActiveColor,
    outlineColor: props.theme.colors.main.borderActiveColor,
    outlineStyle: "solid",
    outlineWidth: 1,
  },

  "& > label > span": {
    fontWeight: 500,
  },

  "& > input, & > select": {
    backgroundColor: props.theme.colors.inputBackgroundColor,
    color: props.theme.colors.textColor,
    border: "none",
    padding: "2px 4px 4px 4px",
    height: 26,
  },
  "& > input:focus-visible, & > select:focus-visible  ": {
    outline: props.theme.colors.focusOutline,
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
    outline: props.theme.colors.focusOutline,
  },
  ":hover": {
    backgroundColor: props.theme.colors.backgroundPrimaryActive,
    cursor: "pointer",
  },
}));

export default SettingsDialog;
