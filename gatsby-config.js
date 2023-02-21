const dotenv = require("dotenv");
dotenv.config();

// const { githubProjectsQuery, githubCommentsQuery } = require("./github-api");
const { githubProjectsQuery } = require("./github-api");

module.exports = {
  siteMetadata: {
    title: "Sergii Mykhailov",
    jobTitle: "Principal Software Engineer",
    description: "Work and Life",
    author: "Sergii Mykhailov",
    siteUrl: "https://sergii.dev/",
    keywords:
      "Sergii Mykhailov, Software Engineer, Principal Software Engineer, Principal Engineer, Software Architect, Software Developer, Architecture, Software Design, Best Practices, Clean Code, Clean Architecture, SOLID, DDD, CQRS, Event Sourcing, Microservices, Cloud, Azure, CI/CD, DevOps, Agile, TDD, BDD, F#, C#, TypeScript, JavaScript, React, Angular, Node.js, .NET, ASP.NET, ASP.NET Core, .NET Core",
    linkedin: {
      url: "https://www.linkedin.com/in/smykhailov/",
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
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-W6NQKCSCE2", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // // This object gets passed directly to the gtag config command
        // // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // // This object is used for configuration specific to this plugin
        // pluginConfig: {
        //   // Puts tracking script in the head instead of the body
        //   head: false,
        //   // Setting this parameter is also optional
        //   respectDNT: true,
        //   // Avoids sending pageview hits from custom paths
        //   exclude: ["/preview/**", "/do-not-track/me/too/"],
        //   // Defaults to https://www.googletagmanager.com
        //   origin: "YOUR_SELF_HOSTED_ORIGIN",
        // },
      },
    },
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
        path: "./articles/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
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
