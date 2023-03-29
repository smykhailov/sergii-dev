import Typography from "typography";

const typography = new Typography({
  baseLineHeight: 1.666,
  bodyWeight: 200,
  boldWeight: 700,
  scaleRatio: 1.5,
  headerFontFamily: ["inherit"],
  overrideStyles: ({ rhythm }) => ({
    "h1,h2,h3,h4,h5,h6,p": {
      marginBottom: rhythm(1 / 1.8),
    },
    "h1,h2,h3,h4,h5,h6": {
      marginBottom: rhythm(0.2),
      lineHeight: 2,
    },
    li: {
      marginBottom: rhythm(0),
    },

    options: {},
  }),
});

export default typography;
