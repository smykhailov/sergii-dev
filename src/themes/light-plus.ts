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
    border: "none", // done
    borderActive: "solid 1px transparent", // done
    borderHover: "solid 1px transparent", // done
    shadow: "#333 0 6px 6px -6px", // done

    scrollBar: {
      borderColor: "rgb(220, 220, 220)", // done
      thumbBackgroundColor: "rgb(193, 193, 193)", // done
      thumbBackgroundHoverColor: "rgb(73, 73, 73)", // done
    },

    appBar: {
      backgroundColor: "rgb(44, 44, 44)", // done
      textColor: "rgba(255, 255, 255, 0.4)", // done
      textActiveColor: "rgb(255, 255, 255)", // done
      textHoverColor: "rgb(255, 255, 255)", // done
    },

    leftPane: {
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
      linkColor: "rgb(0, 106, 177)", // done
      btnBackgroundColor: "rgb(0, 122, 204)", // done
      btnTextColor: "rgb(255, 255, 255)", // done
      btnBackgroundHoverColor: "rgb(0, 98, 163)", // done
      popupBackgroundColor: "rgb(232, 232, 232)", // done
      popupItemHoverColor: "rgb(230, 243, 255)", // done
    },
  },
};

export default lightPlusTheme;
