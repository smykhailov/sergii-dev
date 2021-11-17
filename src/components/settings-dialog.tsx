import { FC, useCallback, useEffect } from "react";
import { Theme, useTheme } from "@emotion/react";

import Modal from "react-modal";

Modal.setAppElement(document.body);

const SettingsDialog: FC<{ isOpen: boolean; onClose: () => void }> = props => {
  const theme = useTheme();

  const handleCloseDialog = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      props.onClose();
    }
  }, []);

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
      <h2>Hello</h2>
      <button onClick={props.onClose}>close</button>
      <div>I am a modal</div>
      <form>
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
        <button>the modal</button>
      </form>
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

export default SettingsDialog;
