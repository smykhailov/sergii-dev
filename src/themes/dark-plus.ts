import { Theme } from "@emotion/react";

const darkPlusTheme: Theme = {
  fontSize: "13px",
  fontFace: "Segoe UI",
  articleFontSize: "16px",
  articleFontFace: "Segoe UI",

  colors: {
    backgroundPrimary: "rgb(30, 30, 30)", // done
    backgroundSecondary: "rgb(37, 37, 38)", // done
    modalOverlayColor: "rgba(40, 44, 52, 0.85)", //done
    textColor: "rgb(231, 231, 231)", // done
    selectionColor: "rgb(38, 79, 120)", // done
    linkColor: "rgb(55, 148, 255)", // done
    inputFocusOutline: "1px solid rgb(0, 127, 212)", // done
    inputBackground: "rgb(60, 60, 60)", // done
    closeButtonBackgroundActive: "rgb(37, 37, 37)", // done
    border: "solid 1px transparent", // done
    borderActive: "solid 1px transparent", // done
    borderHover: "solid 1px transparent", // done

    scrollBar: {
      borderColor: "rgb(57, 57, 57)", // done
      thumbBackgroundColor: "rgb(66, 66, 66)", // done
      thumbBackgroundHoverColor: "rgb(79, 79, 79)", // done
    },

    appBar: {
      backgroundColor: "rgb(51, 51, 51)", // done
      textColor: "rgb(133, 133, 133)", // done
      textActiveColor: "rgb(255, 255, 255)", // done
      textHoverColor: "rgb(255, 255, 255)", // done
    },

    leftPane: {
      backgroundColorHover: "rgb(42, 45, 46)", // done
      backgroundColorActive: "rgb(55, 55, 61)", // done
      textColor: "rgb(204, 204, 204)", // done
      textColorHover: "rgb(204, 204, 204)", // done
      textColorActive: "rgb(255, 255, 255)", // done
    },

    main: {
      backgroundColor: "rgb(30, 30, 30)", // done
      backgroundHoverColor: "rgb(37, 37, 37)", // done
      backgroundActiveColor: "rgb(44, 44, 44)", // Form Control - done
      borderActiveColor: "rgb(70, 70, 70)", // Form Control - done
      titleContainerBackgroundColor: "rgb(37, 37, 38)", // done
      titleBackgroundColor: "rgb(30, 30, 30)", // done
    },

    footer: {
      backgroundColor: "rgb(0, 122, 204)", // done
      backgroundColorActive: "rgba(255, 255, 255, 0.12)", // done
      textColor: "rgb(255, 255, 255)", // done
    },

    gitalk: {
      linkColor: "rgb(55, 148, 255)", // done
      btnBackgroundColor: "rgb(14, 99, 156)", // done
      btnTextColor: "rgb(255, 255, 255)", // done
      btnBackgroundHoverColor: "rgb(17, 119, 187)", // done
      popupBackgroundColor: "rgb(60, 60, 60)", // done
      popupItemHoverColor: "rgb(9, 71, 113)", // done
    },
  },
};

export default darkPlusTheme;
