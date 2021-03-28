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

      appBar: {
        backgroundColor: Property.BackgroundColor;
        textColor: Property.Color;
        textActiveColor: Property.Color;
        textHoverColor: Property.Color;
      };

      leftPane: {
        backgroundColor: Property.Color;
      };

      footer: {
        textColor: Property.Color;
      };
    };
  }
}
