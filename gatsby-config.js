module.exports = {
  siteMetadata: {
    title: "Sergii Mykhailov - Software Engineer",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
