import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
import { IGatsbyImageData, getSrc } from "gatsby-plugin-image";
dotenv.config();

const { githubProjectsQuery } = require("./github-api");

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Sergii Mykhailov",
    jobTitle: "Principal Software Engineer",
    description:
      "sergii.dev, is a personal blog maintained by Sergii Mykhailov. The blog features articles on various topics such as software engineering, programming languages, and cloud computing.",
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
    "gatsby-plugin-sharp",
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-gtag",
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
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: "Sergii Mykhailov's Blog",
            output: "rss.xml",
            link: "https://sergii.dev/",
            image: "https://sergii.dev/static/logo.png",
            custom_namespaces: {
              media: "http://search.yahoo.com/mrss/",
            },
            query: `
            {
              allMdx(
                sort: {frontmatter: {date: ASC}}
                filter: {frontmatter: {published: {eq: true}}}
              ) {
                nodes {
                  excerpt(pruneLength: 1000)
                  frontmatter {
                    title
                    categories
                    date
                    featuredImage {
                      childImageSharp {
                        gatsbyImageData(width: 800)
                      }
                    }
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            `,
            serialize: ({ query: { site, allMdx } }: TQuery) => {
              return allMdx.nodes.map(node => {
                const thumbnail = getSrc(node.frontmatter.featuredImage);
                const mediaThumbnail = thumbnail
                  ? {
                      "media:thumbnail": {
                        _attr: {
                          url: `${site.siteMetadata.siteUrl}${thumbnail}`,
                        },
                      },
                    }
                  : undefined;
                const featuredImage = thumbnail
                  ? {
                      featuredImage: `${site.siteMetadata.siteUrl}${thumbnail}`,
                    }
                  : undefined;
                return Object.assign({}, node.frontmatter, {
                  url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  description: node.excerpt,
                  pubDate: node.date,
                  custom_elements: [mediaThumbnail, featuredImage],
                });
              });
            },
          },
        ],
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
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.GH_PAT,
        // graphQLQuery: [githubProjectsQuery, githubCommentsQuery],
        graphQLQuery: githubProjectsQuery,
      },
    },
    {
      resolve: "gatsby-plugin-gitalk",
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
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 910,
              quality: 100,
              wrapperStyle: "margin-left: 0;",
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          "gatsby-remark-gifs",
        ],
        mdxOptions: {
          remarkPlugins: [
            [
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
          ],
          rehypePlugins: [
            require("rehype-slug"),
            [
              require("rehype-autolink-headings"),
              {
                behavior: "append",
              },
            ],
          ],
        },
      },
    },
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

type TQuery = {
  query: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
        site_url: string;
      };
    };
    allMdx: {
      nodes: {
        excerpt: string;
        date: string;
        frontmatter: {
          title: string;
          categories: string[];
          featuredImage: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
        fields: {
          slug: string;
        };
      }[];
    };
  };
};
