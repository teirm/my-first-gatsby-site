module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blahaj's First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `blog`,
            path: `${__dirname}/blog`,
        }
    },
  ],
};
