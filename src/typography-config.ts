import Typography from "typography";

const typography = new Typography({
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
});

export default typography;
