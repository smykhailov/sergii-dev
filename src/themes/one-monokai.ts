import { Theme } from "@emotion/react";

export const oneMonokaiTheme: Theme = {
  colors: {
    backgroundPrimary: "#282C34",
    backgroundSecondary: "#21252B",
    backgroundPrimaryActive: "#2F333D",
    textColor: "#CCC",
    textActiveColor: "rgba(215, 218, 224)",
    selectionColor: "#3E4450",

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
      titleContainerBackgroundColor: "#21252B",
      titleBackgroundColor: "#383E49",
    },

    footer: {
      textColor: "rgb(157, 165, 180)",
    },
  },
};
