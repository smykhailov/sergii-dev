import "@emotion/react";
import { Property } from "csstype";

declare module "@emotion/react" {
  export interface Theme {
    fontSize: Property.FontSize;
    fontFace: Property.FontFamily;
    articleFontSize: Property.FontSize;
    articleFontFace: Property.FontFamily;

    colors: {
      backgroundPrimary: Property.BackgroundColor;
      backgroundSecondary: Property.BackgroundColor;
      modalOverlayColor: Property.BackgroundColor;
      textColor: Property.Color;
      selectionColor: Property.Color;
      linkColor: Property.Color;
      inputFocusOutline: Property.Outline;
      inputBackground: Property.BackgroundColor;
      closeButtonBackgroundActive: Property.BackgroundColor;
      border: Property.Border;
      borderActive: Property.Border;
      borderHover: Property.Border;
      shadow: Property.BoxShadow;

      error: {
        textColor: Property.Color;
        backgroundColor: Property.BackgroundColor;
        border: Property.Border;
      };

      scrollBar: {
        borderColor: Property.BorderColor;
        thumbBackgroundColor: Property.BackgroundColor;
        thumbBackgroundHoverColor: Property.BackgroundColor;
      };

      appBar: {
        backgroundColor: Property.BackgroundColor;
        textColor: Property.Color;
        textActiveColor: Property.Color;
        textHoverColor: Property.Color;
      };

      leftPane: {
        backgroundColorHover: Property.BackgroundColor;
        backgroundColorActive: Property.BackgroundColor;
        textColor: Property.Color;
        textColorHover: Property.Color;
        textColorActive: Property.Color;
      };

      main: {
        backgroundColor: Property.BackgroundColor;
        backgroundHoverColor: Property.BackgroundColor;
        backgroundActiveColor: Property.BackgroundColor;
        borderActiveColor: Property.BorderColor;
        titleContainerBackgroundColor: Property.BackgroundColor;
        titleBackgroundColor: Property.BackgroundColor;
      };

      footer: {
        backgroundColor: Property.BackgroundColor;
        backgroundColorActive: Property.BackgroundColor;
        textColor: Property.Color;
      };

      gitalk: {
        linkColor: Property.Color;
        btnBackgroundColor: Property.BackgroundColor;
        btnTextColor: Property.Color;
        btnBackgroundHoverColor: Property.Color;
        popupBackgroundColor: Property.BackgroundColor;
        popupItemHoverColor: Property.Color;
      };

      blockquote: {
        leftBarColor: Property.Color;
        backgroundColor: Property.BackgroundColor;
      };
    };
  }
}
