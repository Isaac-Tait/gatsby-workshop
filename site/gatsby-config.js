/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `mountainTopCoding Conference 2021`,
    description: `Isaac Tait's Gatsby Workshop Demo Site`,
    author: `@Isaac_Tait_83`,
    siteUrl: `https://www.mountaintopcoding.com`,
    footer: `mountainTopCoding(🏔);`,
    linkOne: "Tickets",
    menuLinks: [
      {
        name: "Tickets",
        link: "/ticket",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/snow-mountain.svg`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    `gatsby-transformer-yaml`,
  ],
};
