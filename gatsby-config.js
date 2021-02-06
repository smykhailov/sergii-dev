module.exports = {
  siteMetadata: {
    title: "Sergii Mykhailov - Software Engineer",
    description: "Work and Life",
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
    {
      resolve: "gatsby-plugin-tsconfig-paths",
      options: {
        baseUrl: "./src",
      },
    },
  ],
};
