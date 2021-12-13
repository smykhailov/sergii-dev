import { Theme } from "@emotion/react";

const oneMonokaiTheme: Theme = {
  fontSize: "13px",
  fontFace: "Segoe UI",
  articleFontSize: "16px",
  articleFontFace: "Segoe UI",

  colors: {
    backgroundPrimary: "rgb(40, 44, 52)",
    backgroundSecondary: "rgb(33, 37, 43)",
    modalOverlayColor: "rgba(77, 78, 78, 0.85)",
    textColor: "rgb(204, 204, 204)",
    selectionColor: "rgb(62, 68, 80)",
    linkColor: "rgb(55, 148, 255)",
    inputFocusOutline: "1px solid #007fd4",
    inputBackground: "rgb(29, 31, 35)",
    closeButtonBackgroundActive: "rgb(47, 51, 61)",
    border: "solid 1px transparent", // done
    borderActive: "solid 1px transparent", // done
    borderHover: "solid 1px transparent", // done

    scrollBar: {
      borderColor: "rgb(85, 85, 85)",
      thumbBackgroundColor: "rgb(56, 62, 73)",
      thumbBackgroundHoverColor: "rgb(65, 72, 84)",
    },

    appBar: {
      backgroundColor: "rgb(47, 51, 61)",
      textColor: "rgba(215, 218, 224, 0.4)",
      textActiveColor: "rgb(248, 250, 253)",
      textHoverColor: "rgb(248, 250, 253)",
    },

    leftPane: {
      backgroundColorHover: "rgb(41, 45, 53)",
      backgroundColorActive: "rgb(44, 49, 58)",
      textColor: "rgb(204, 204, 204)",
      textColorHover: "rgb(204, 204, 204)",
      textColorActive: "rgb(204, 204, 204)",
    },

    main: {
      backgroundColor: "rgb(40, 44, 52)",
      backgroundHoverColor: "rgb(51, 58, 66)",
      backgroundActiveColor: "rgb(52, 56, 63)",
      borderActiveColor: "rgb(77, 80, 86)",
      titleContainerBackgroundColor: "rgb(33, 37, 43)",
      titleBackgroundColor: "rgb(56, 62, 73)",
    },

    footer: {
      backgroundColor: "rgb(33, 37, 43)",
      backgroundColorActive: "rgb(47, 51, 61)",
      textColor: "rgb(157, 165, 180)",
    },

    gitalk: {
      linkColor: "rgb(55, 148, 255)",
      btnBackgroundColor: "rgb(82, 139, 255)",
      btnTextColor: "rgb(248, 250, 253)",
      btnBackgroundHoverColor: "rgb(149, 185, 255)",
      popupBackgroundColor: "rgb(29, 31, 35)",
      popupItemHoverColor: "rgb(44, 49, 58)",
    },
  },
};

export default oneMonokaiTheme;
