import "@emotion/react";
import { Property } from "csstype";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      backgroundPrimary: Property.BackgroundColor;
      backgroundPrimaryActive: Property.BackgroundColor;
      backgroundSecondary: Property.BackgroundColor;
      textColor: Property.Color;
      textActiveColor: Property.Color;
      selectionColor: Property.Color;
      linkColor: Property.Color;

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
        titleContainerBackgroundColor: Property.Color;
        titleBackgroundColor: Property.Color;
      };

      footer: {
        textColor: Property.Color;
      };
    };
  }
}
