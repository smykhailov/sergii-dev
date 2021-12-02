// import { defaultContextValue } from "@components/app-context";
// import { fonts } from "@core/config";
import Typography from "typography";

// const config = defaultContextValue.config;

// console.warn(`config: ${JSON.stringify(config)}`);

const typography = new Typography({
  // baseFontSize: `${config.articleFontSize}px`, // "16px",
  baseFontSize: "16px", // "16px",
  baseLineHeight: 1.666,
  bodyWeight: 200,
  boldWeight: 700,
  scaleRatio: 1.5,
  overrideStyles: ({ rhythm }) => ({
    "h1,h2,h3,h4,h5,h6": {
      marginBottom: rhythm(1 / 1.4),
    },
    options: {},
  }),
  // headerFontFamily: [fonts[config.articleFontFace]],
  // bodyFontFamily: [fonts[config.articleFontFace]],
  headerFontFamily: ["consolas"],
  bodyFontFamily: ["consolas"],
});

export default typography;
