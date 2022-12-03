import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `kitahina.co`,
    siteUrl: `https://kitahina.co`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [require("remark-gfm")],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 768,
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
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
  ],
}

export default config
