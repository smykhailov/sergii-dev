const dotenv = require("dotenv");
dotenv.config();

const { githubApiQuery } = require("./github-api");

module.exports = {
  siteMetadata: {
    title: "Sergii Mykhailov - Software Engineer",
    description: "Work and Life",
    github: {
      url: "https://github.com/smykhailov/",
      description: "Sergii's GitHub Profile",
    },
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
        path: "./content/",
      },
    },
    {
      resolve: "gatsby-plugin-tsconfig-paths",
      options: {
        baseUrl: "./src",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "./src/generated/gatsby-types.d.ts",
        emitSchema: {
          "./src/generated/gatsby-schema.graphql": true,
          "./src/generated/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "./src/generated/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "./src/typography-config",
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GH_PAT,
        graphQLQuery: githubApiQuery,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: process.env.GH_COMMENTS_CLIENT_ID,
          clientSecret: process.env.GH_COMMENTS_CLIENT_SECRET,
          repo: "sergii-dev",
          owner: "smykhailov",
          admin: ["smykhailov"],
        },
      },
    },
  ],
};
