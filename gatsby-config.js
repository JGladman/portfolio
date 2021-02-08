const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Jacob Gladman",
  },
  plugins: [
    { resolve: `gatsby-source-filesystem`, options: { path: `./src` } },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "@chakra-ui/gatsby-plugin",
  ],
};
