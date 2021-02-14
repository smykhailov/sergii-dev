import "@emotion/react";
import { Property } from "csstype";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      backgroundPrimary: Property.BackgroundColor;
      backgroundSecondary: Property.BackgroundColor;
      textColor: string;

      appBar: {
        backgroundColor: Property.BackgroundColor;
        textColor: string;
        textActiveColor: string;
        textHoverColor: string;
      };
    };
  }
}
