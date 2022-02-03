import { Theme } from "@emotion/react";

const highContrastTheme: Theme = {
  fontSize: "13px",
  fontFace: "Segoe UI",
  articleFontSize: "16px",
  articleFontFace: "Segoe UI",

  colors: {
    backgroundPrimary: "rgb(0, 0, 0)",
    backgroundSecondary: "rgb(0, 0, 0)",
    modalOverlayColor: "rgba(40, 44, 52, 0.85)",
    textColor: "rgb(255, 255, 255)",
    selectionColor: "rgb(128, 128, 128)",
    linkColor: "rgb(55, 148, 255)",
    inputFocusOutline: "1px solid rgb(243, 133, 24)",
    inputBackground: "rgb(0, 0, 0)",
    closeButtonBackgroundActive: "rgb(0, 0, 0)",
    border: "solid 1px rgb(111, 195, 223)",
    borderActive: "solid 1px rgb(243, 133, 24)",
    borderHover: "dashed 1px rgb(243, 133, 24)",
    shadow: "#000000 0 0 0 0 0",

    error: {
      textColor: "rgb(255, 255, 255)",
      backgroundColor: "rgb(0, 0, 0)",
      border: "solid 1px rgb(111, 195, 223)",
    },

    scrollBar: {
      borderColor: "rgb(35, 35, 35)",
      thumbBackgroundColor: "rgb(39, 43, 51)",
      thumbBackgroundHoverColor: "rgb(45, 50, 59)",
    },

    appBar: {
      backgroundColor: "rgb(0, 0, 0)",
      textColor: "rgb(255, 255, 255)",
      textActiveColor: "rgb(255, 255, 255)",
      textHoverColor: "rgb(255, 255, 255)",
    },

    leftPane: {
      backgroundColorHover: "rgb(0, 0, 0)",
      backgroundColorActive: "rgb(0, 0, 0)",
      textColor: "rgb(255, 255, 255)",
      textColorHover: "rgb(255, 255, 255)",
      textColorActive: "rgb(255, 255, 255)",
    },

    main: {
      backgroundColor: "rgb(0, 0, 0)",
      backgroundHoverColor: "rgb(0, 0, 0)",
      backgroundActiveColor: "rgb(0, 0, 0)",
      borderActiveColor: "rgb(243, 133, 24)",
      titleContainerBackgroundColor: "rgb(0, 0, 0)",
      titleBackgroundColor: "rgb(0, 0, 0)",
    },

    footer: {
      backgroundColor: "rgb(0, 0, 0)",
      backgroundColorActive: "rgb(0, 0, 0)",
      textColor: "rgb(255, 255, 255)",
    },

    gitalk: {
      linkColor: "rgb(55, 148, 255)",
      btnBackgroundColor: "rgb(0, 0, 0)",
      btnTextColor: "rgb(255, 255, 255)",
      btnBackgroundHoverColor: "rgb(0, 0, 0)",
      popupBackgroundColor: "rgb(0, 0, 0)",
      popupItemHoverColor: "rgb(0, 0, 0)",
    },

    blockquote: {
      leftBarColor: "rgb(243, 133, 24)",
      backgroundColor: "rgb(0, 0, 0)",
    },
  },
};

export default highContrastTheme;
