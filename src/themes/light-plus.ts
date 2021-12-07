import { Theme } from "@emotion/react";

const lightPlusTheme: Theme = {
  fontSize: "13px",
  fontFace: "Segoe UI",
  articleFontSize: "16px",
  articleFontFace: "Segoe UI",

  colors: {
    backgroundPrimary: "rgb(255, 255, 255)", // done
    backgroundSecondary: "rgb(243, 243, 243)", // done
    modalOverlayColor: "rgba(40, 44, 52, 0.65)", // done
    textColor: "rgb(97, 97, 97)", // done
    selectionColor: "rgb(173, 214, 255)", // done
    linkColor: "rgb(0, 106, 177)", // done
    inputFocusOutline: "1px solid rgb(0, 144, 241)", // done
    inputBackground: "rgb(243, 243, 243)", // done
    closeButtonBackgroundActive: "rgb(243, 243, 243)", // done

    scrollBar: {
      borderColor: "rgb(85, 85, 85)",
      thumbBackgroundColor: "rgb(56, 62, 73)",
      thumbBackgroundHoverColor: "rgb(65, 72, 84)",
    },

    appBar: {
      backgroundColor: "rgb(44, 44, 44)", // done
      textColor: "rgba(255, 255, 255, 0.4)", // done
      textActiveColor: "rgb(255, 255, 255)", // done
      textHoverColor: "rgb(255, 255, 255)", // done
    },

    leftPane: {
      backgroundColor: "rgb(243, 243, 243)", // done
      backgroundColorHover: "rgb(232, 232, 232)", // done
      backgroundColorActive: "rgb(0, 96, 192)", // done
      textColor: "rgb(97, 97, 97)", // done
      textColorHover: "rgb(97, 97, 97)", // done
      textColorActive: "rgb(255, 255, 255)", // done
    },

    main: {
      backgroundColor: "rgb(255, 255, 255)", // done
      backgroundHoverColor: "rgb(230, 243, 255)", // done
      backgroundActiveColor: "rgb(243, 243, 243)", // Form Control - done
      borderActiveColor: "rgb(0, 144, 241)", // Form Control - done
      titleContainerBackgroundColor: "rgb(243, 243, 243)", // done
      titleBackgroundColor: "rgb(255, 255, 255)", // done
    },

    footer: {
      backgroundColor: "rgb(0, 122, 204)", // done
      backgroundColorActive: "rgba(255, 255, 255, 0.12)", // done
      textColor: "rgb(255, 255, 255)", // done
    },

    gitalk: {
      linkColor: "rgb(55, 148, 255)",
      btnBackgroundColor: "rgb(82, 139, 255)",
      btnTextColor: "rgb(248, 250, 253)",
      btnTextHoverColor: "rgb(149, 185, 255)",
      popupBackgroundColor: "rgb(29, 31, 35)",
      popupItemHoverColor: "rgb(44, 49, 58)",
      outlineColor: "rgb(0, 127, 212)",
    },
  },
};

export default lightPlusTheme;
