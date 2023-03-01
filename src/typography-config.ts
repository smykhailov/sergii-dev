import Typography from "typography";

const typography = new Typography({
  baseLineHeight: 1.666,
  bodyWeight: 200,
  boldWeight: 700,
  scaleRatio: 1.5,
  overrideStyles: ({ rhythm }) => ({
    "h1,h2,h3,h4,h5,h6,p": {
      marginBottom: rhythm(1 / 1.8),
    },
    "h1,h2,h3,h4,h5,h6": {
      marginBottom: rhythm(0.2),
      lineHeight: 2,
    },

    // blockquote: {
    //   fontSize: "1.4em",
    //   margin: "20px auto",
    //   padding: "1.2em 30px 1.2em 75px",
    //   borderLeft: "8px solid #78C0A8",
    // },

    // // blockquote::before{
    // //   font-family:Arial;
    // //   content: "\201C";
    // //   color:#78C0A8;
    // //   font-size:4em;
    // //   position: absolute;
    // //   left: 10px;
    // //   top:-10px;
    // // }

    // // blockquote::after{
    // //   content: '';
    // // }

    // // blockquote span{
    // //   display:block;
    // //   color:#333333;
    // //   font-style: normal;
    // //   font-weight: bold;
    // //   margin-top:1em;
    // // }

    options: {},
  }),
});

export default typography;
