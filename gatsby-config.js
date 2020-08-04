module.exports = {
  siteMetadata: {
    title: `Wisdom`,
    description: `Wisdom not of the earth`,
    keywords: [`wisdom`, `Judah`, `Spiritual food`],
    author: `Servant`,
    siteUrl: `https://wisdomofjudah.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      
      {
        name: `Blog`,
        link: `/blog`,
        type: `internal`, //internal or anchor
        subMenu: [
          
          {
            name: `Lion of Judah Wisdom`,
            link: `/lionofJudah`,
            type: `internal`, //internal or anchor
          },
        ],
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `fake@email.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      
  
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
      },
    },
    `gatsby-theme-catalyst-header-top`, // Try `gatsby-theme-catalyst-header-side`
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/lion.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
