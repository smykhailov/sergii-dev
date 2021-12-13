import { Theme } from "@emotion/react";

const highContrastTheme: Theme = {
  fontSize: "13px",
  fontFace: "Segoe UI",
  articleFontSize: "16px",
  articleFontFace: "Segoe UI",

  colors: {
    backgroundPrimary: "rgb(0, 0, 0)", // done
    backgroundSecondary: "rgb(0, 0, 0)", // done
    modalOverlayColor: "rgba(40, 44, 52, 0.85)",
    textColor: "rgb(255, 255, 255)", // done
    selectionColor: "rgb(128, 128, 128)", // done
    linkColor: "rgb(55, 148, 255)", // done
    inputFocusOutline: "1px solid rgb(243, 133, 24)", // done
    inputBackground: "rgb(0, 0, 0)", // done
    closeButtonBackgroundActive: "rgb(0, 0, 0)", // done
    border: "solid 1px rgb(111, 195, 223)", // done
    borderActive: "solid 1px rgb(243, 133, 24)", // done
    borderHover: "dashed 1px rgb(243, 133, 24)", // done
    shadow: "#000000 0 0 0 0 0", // done

    scrollBar: {
      borderColor: "rgb(35, 35, 35)", // done
      thumbBackgroundColor: "rgb(39, 43, 51)", // done
      thumbBackgroundHoverColor: "rgb(45, 50, 59)", // done
    },

    appBar: {
      backgroundColor: "rgb(0, 0, 0)", // done
      textColor: "rgb(255, 255, 255)", // done
      textActiveColor: "rgb(255, 255, 255)", // done
      textHoverColor: "rgb(255, 255, 255)", // done
    },

    leftPane: {
      backgroundColorHover: "rgb(0, 0, 0)", // done
      backgroundColorActive: "rgb(0, 0, 0)", // done
      textColor: "rgb(255, 255, 255)", // done
      textColorHover: "rgb(255, 255, 255)", // done
      textColorActive: "rgb(255, 255, 255)", // done
    },

    main: {
      backgroundColor: "rgb(0, 0, 0)", // done
      backgroundHoverColor: "rgb(0, 0, 0)", // done
      backgroundActiveColor: "rgb(0, 0, 0)", // done
      borderActiveColor: "rgb(243, 133, 24)", // done
      titleContainerBackgroundColor: "rgb(0, 0, 0)", // done
      titleBackgroundColor: "rgb(0, 0, 0)", // done
    },

    footer: {
      backgroundColor: "rgb(0, 0, 0)", // done
      backgroundColorActive: "rgb(0, 0, 0)", // done
      textColor: "rgb(255, 255, 255)", // done
    },

    gitalk: {
      linkColor: "rgb(55, 148, 255)", // done
      btnBackgroundColor: "rgb(0, 0, 0)", // done
      btnTextColor: "rgb(255, 255, 255)", // done
      btnBackgroundHoverColor: "rgb(0, 0, 0)", // done
      popupBackgroundColor: "rgb(0, 0, 0)", // done
      popupItemHoverColor: "rgb(0, 0, 0)", // done
    },
  },
};

export default highContrastTheme;
