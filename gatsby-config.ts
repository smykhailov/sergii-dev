import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
dotenv.config();

const { githubProjectsQuery } = require("./github-api");

const wrapESMPlugin = (name: string) =>
  function wrapESM(opts: any) {
    return async (...args: any) => {
      const mod = await import(name);
      const plugin = mod.default(opts);
      return plugin(...args);
    };
  };

const config: GatsbyConfig = {
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
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-W6NQKCSCE2", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/logo.png",
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
      resolve: "gatsby-plugin-tsconfig-paths",
      options: {
        baseUrl: "./src",
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
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GH_PAT,
        // graphQLQuery: [githubProjectsQuery, githubCommentsQuery],
        graphQLQuery: githubProjectsQuery,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
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
        ],
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            // wrapESMPlugin(`remark-gfm`),
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            // wrapESMPlugin(`remark-external-links`)({ target: false }),
            require("gatsby-remark-vscode").remarkPlugin,
            {
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
          ],
          rehypePlugins: [
            // require("rehype-slug"),
            // [require("rehype-autolink-headings"), { behavior: "wrap" }],
          ],
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./articles/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: "./articles/",
      },
      __key: "articles",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
      __key: "content",
    },
  ],
};

export default config;

