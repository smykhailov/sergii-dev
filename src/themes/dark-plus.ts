import { Theme } from "@emotion/react";

const darkPlusTheme: Theme = {
  fontSize: "13px",
  fontFace: "Segoe UI",
  articleFontSize: "16px",
  articleFontFace: "Segoe UI",

  colors: {
    backgroundPrimary: "rgb(30, 30, 30)",
    backgroundSecondary: "rgb(37, 37, 38)",
    modalOverlayColor: "rgba(40, 44, 52, 0.85)",
    textColor: "rgb(231, 231, 231)",
    selectionColor: "rgb(38, 79, 120)",
    linkColor: "rgb(55, 148, 255)",
    inputFocusOutline: "1px solid rgb(0, 127, 212)",
    inputBackground: "rgb(60, 60, 60)",
    closeButtonBackgroundActive: "rgb(37, 37, 37)",
    border: "none",
    borderActive: "solid 1px transparent",
    borderHover: "solid 1px transparent",
    shadow: "#000000 0 6px 6px -6px ",

    error: {
      textColor: "rgb(204, 204, 204)",
      backgroundColor: "rgb(90, 29, 29)",
      border: "solid 1px rgb(190, 17, 0)",
    },

    scrollBar: {
      borderColor: "rgb(57, 57, 57)",
      thumbBackgroundColor: "rgb(66, 66, 66)",
      thumbBackgroundHoverColor: "rgb(79, 79, 79)",
    },

    appBar: {
      backgroundColor: "rgb(51, 51, 51)",
      textColor: "rgb(133, 133, 133)",
      textActiveColor: "rgb(255, 255, 255)",
      textHoverColor: "rgb(255, 255, 255)",
    },

    leftPane: {
      backgroundColorHover: "rgb(42, 45, 46)",
      backgroundColorActive: "rgb(55, 55, 61)",
      textColor: "rgb(204, 204, 204)",
      textColorHover: "rgb(204, 204, 204)",
      textColorActive: "rgb(255, 255, 255)",
    },

    main: {
      backgroundColor: "rgb(30, 30, 30)",
      backgroundHoverColor: "rgb(37, 37, 37)",
      backgroundActiveColor: "rgb(44, 44, 44)", // Form Control - done
      borderActiveColor: "rgb(70, 70, 70)", // Form Control - done
      titleContainerBackgroundColor: "rgb(37, 37, 38)",
      titleBackgroundColor: "rgb(30, 30, 30)",
    },

    footer: {
      backgroundColor: "rgb(0, 122, 204)",
      backgroundColorActive: "rgba(255, 255, 255, 0.12)",
      textColor: "rgb(255, 255, 255)",
    },

    gitalk: {
      linkColor: "rgb(55, 148, 255)",
      btnBackgroundColor: "rgb(14, 99, 156)",
      btnTextColor: "rgb(255, 255, 255)",
      btnBackgroundHoverColor: "rgb(17, 119, 187)",
      popupBackgroundColor: "rgb(60, 60, 60)",
      popupItemHoverColor: "rgb(9, 71, 113)",
    },

    blockquote: {
      leftBarColor: "rgb(0, 122, 204)",
      backgroundColor: "rgb(37, 37, 38)",
    },
  },
};

export default darkPlusTheme;
