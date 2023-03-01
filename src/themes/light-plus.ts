import { Theme } from "@emotion/react";

const lightPlusTheme: Theme = {
  fontSize: "13px",
  fontFace:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  articleFontSize: "16px",
  articleFontFace:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",

  colors: {
    backgroundPrimary: "rgb(255, 255, 255)",
    backgroundSecondary: "rgb(243, 243, 243)",
    modalOverlayColor: "rgba(40, 44, 52, 0.65)",
    textColor: "rgb(97, 97, 97)",
    selectionColor: "rgb(173, 214, 255)",
    linkColor: "rgb(0, 106, 177)",
    inputFocusOutline: "1px solid rgb(0, 144, 241)",
    inputBackground: "rgb(243, 243, 243)",
    closeButtonBackgroundActive: "rgb(243, 243, 243)",
    border: "none",
    borderActive: "solid 1px transparent",
    borderHover: "solid 1px transparent",
    shadow: "#333 0 6px 6px -6px",

    error: {
      textColor: "rgb(97, 97, 97)",
      backgroundColor: "rgb(242, 222, 222)",
      border: "solid 1px rgb(190, 17, 0)",
    },

    scrollBar: {
      borderColor: "rgb(220, 220, 220)",
      thumbBackgroundColor: "rgb(193, 193, 193)",
      thumbBackgroundHoverColor: "rgb(73, 73, 73)",
    },

    appBar: {
      backgroundColor: "rgb(44, 44, 44)",
      textColor: "rgba(255, 255, 255, 0.4)",
      textActiveColor: "rgb(255, 255, 255)",
      textHoverColor: "rgb(255, 255, 255)",
    },

    leftPane: {
      backgroundColorHover: "rgb(232, 232, 232)",
      backgroundColorActive: "rgb(0, 96, 192)",
      textColor: "rgb(97, 97, 97)",
      textColorHover: "rgb(97, 97, 97)",
      textColorActive: "rgb(255, 255, 255)",
    },

    main: {
      backgroundColor: "rgb(255, 255, 255)",
      backgroundHoverColor: "rgb(230, 243, 255)",
      backgroundActiveColor: "rgb(243, 243, 243)", // Form Control - done
      borderActiveColor: "rgb(0, 144, 241)", // Form Control - done
      titleContainerBackgroundColor: "rgb(243, 243, 243)",
      titleBackgroundColor: "rgb(255, 255, 255)",
    },

    footer: {
      backgroundColor: "rgb(0, 122, 204)",
      backgroundColorActive: "rgba(255, 255, 255, 0.12)",
      textColor: "rgb(255, 255, 255)",
    },

    gitalk: {
      linkColor: "rgb(0, 106, 177)",
      btnBackgroundColor: "rgb(0, 122, 204)",
      btnTextColor: "rgb(255, 255, 255)",
      btnBackgroundHoverColor: "rgb(0, 98, 163)",
      popupBackgroundColor: "rgb(232, 232, 232)",
      popupItemHoverColor: "rgb(230, 243, 255)",
    },

    blockquote: {
      leftBarColor: "rgb(0, 96, 192)",
      backgroundColor: "rgb(243, 243, 243)",
    },
  },
};

export default lightPlusTheme;
