import { Theme } from "@emotion/react";

export const lightPlusTheme: Theme = {
  colors: {
    backgroundPrimary: "#282C34",
    backgroundPrimaryActive: "#2F333D",
    backgroundSecondary: "#21252B",
    modalOverlayColor: "rgba(40, 44, 52, 0.85)",
    textColor: "#CCC",
    textActiveColor: "rgba(215, 218, 224)",
    selectionColor: "#3E4450",
    linkColor: "#3794ff",
    focusOutline: "1px solid #007fd4",

    scrollBar: {
      borderColor: "#555",
      thumbBackgroundColor: "#383e49",
      thumbBackgroundHoverColor: "#414854",
    },

    appBar: {
      backgroundColor: "#2F333D",
      textColor: "rgba(215, 218, 224, 0.4)",
      textActiveColor: "rgb(248, 250, 253)",
      textHoverColor: "rgb(248, 250, 253)",
    },

    leftPane: {
      backgroundColor: "#2C313A",
      backgroundColorHover: "#292D35",
    },

    main: {
      backgroundColor: "#282C34",
      backgroundHoverColor: "#333A42",
      backgroundActiveColor: "#34383F",
      borderActiveColor: "#4D5056",
      titleContainerBackgroundColor: "#21252B",
      titleBackgroundColor: "#383E49",
    },

    footer: {
      textColor: "rgb(157, 165, 180)",
    },

    gitalk: {
      linkColor: "#3794ff",
      btnBackgroundColor: "rgb(82, 139, 255)",
      btnTextColor: "rgb(248, 250, 253)",
      btnTextHoverColor: "rgb(149, 185, 255)",
      popupBackgroundColor: "rgb(29, 31, 35)",
      popupItemHoverColor: "rgb(44, 49, 58)",
      outlineColor: "#007fd4",
    },
  },
};
