const dotenv = require("dotenv");
dotenv.config();

// const { githubProjectsQuery, githubCommentsQuery } = require("./github-api");
const { githubProjectsQuery } = require("./github-api");

module.exports = {
  siteMetadata: {
    title: "Sergii Mykhailov - Software Engineer",
    description: "Work and Life",
    linkedin: {
      url: "https://www.linkedin.com/in/sergiimykhailov/",
      description: "Sergii's LinkedIn Profile",
    },
    github: {
      url: "https://github.com/smykhailov/",
      description: "Sergii's GitHub Profile",
    },
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              quality: 90,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: "Default Light+",
                dark: "Default Dark+",
                parentSelector: {
                  // Any CSS selector will work!
                  "html[data-theme='light-plus']": "Solarized Light",
                  "html[data-theme='dark-plus']": "Monokai",
                  "html[data-theme='one-monokai']": "Monokai Dimmed",
                  "html[data-theme='high-contrast']": "High Contrast",
                },
              },
              inlineCode: {
                marker: "•",
              },
            },
          },
        ],
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
        // graphQLQuery: [githubProjectsQuery, githubCommentsQuery],
        graphQLQuery: githubProjectsQuery,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          `gatsby-remark-vscode`,
          `gatsby-remark-images`,
        ],
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
