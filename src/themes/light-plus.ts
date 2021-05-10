import { Theme } from "@emotion/react";

export const lightPlusTheme: Theme = {
  colors: {
    backgroundPrimary: "#282C34",
    backgroundPrimaryActive: "#2F333D",
    backgroundSecondary: "#21252B",
    textColor: "#CCC",
    textActiveColor: "rgba(215, 218, 224)",
    selectionColor: "#3E4450",
    linkColor: "#3794ff",

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
      titleContainerBackgroundColor: "#21252B",
      titleBackgroundColor: "#383E49",
    },

    footer: {
      textColor: "rgb(157, 165, 180)",
    },
  },
};
