module.exports = {
  siteMetadata: {
    title: "Sergii Mykhailov - Software Engineer",
    description: "Work and Life",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: "./src/articles/",
      },
    },
    {
      resolve: "gatsby-plugin-tsconfig-paths",
      options: {
        baseUrl: "./src",
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/generated/gatsby-types.d.ts",
        emitSchema: {
          "src/generated/gatsby-schema.graphql": true,
          "src/generated/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/generated/gatsby-plugin-documents.graphql": true,
        },
      },
    },
  ],
};
