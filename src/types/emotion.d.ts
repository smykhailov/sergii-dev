import "@emotion/react";
import { Property } from "csstype";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      backgroundPrimary: Property.BackgroundColor;
      backgroundPrimaryActive: Property.BackgroundColor;
      backgroundSecondary: Property.BackgroundColor;
      modalOverlayColor: Property.BackgroundColor;
      textColor: Property.Color;
      textActiveColor: Property.Color;
      selectionColor: Property.Color;
      linkColor: Property.Color;
      focusOutline: Property.Outline;

      scrollBar: {
        borderColor: Property.Color;
        thumbBackgroundColor: Property.Color;
        thumbBackgroundHoverColor: Property.Color;
      };

      appBar: {
        backgroundColor: Property.BackgroundColor;
        textColor: Property.Color;
        textActiveColor: Property.Color;
        textHoverColor: Property.Color;
      };

      leftPane: {
        backgroundColor: Property.Color;
        backgroundColorHover: Property.Color;
      };

      main: {
        backgroundColor: Property.Color;
        backgroundHoverColor: Property.Color;
        backgroundActiveColor: Property.Color;
        borderActiveColor: Property.Color;
        titleContainerBackgroundColor: Property.Color;
        titleBackgroundColor: Property.Color;
      };

      footer: {
        textColor: Property.Color;
      };

      gitalk: {
        linkColor: Property.Color;
        btnBackgroundColor: Property.Color;
        btnTextColor: Property.Color;
        btnTextHoverColor: Property.Color;
        popupBackgroundColor: Property.Color;
        popupItemHoverColor: Property.Color;
        outlineColor: Property.Color;
      };
    };
  }
}
