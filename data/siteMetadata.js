/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ati\'s Blog',
  author: 'Ali Tunahan Işık',
  headerTitle: 'Ali Tunahan Işık Blog',
  description: 'Random things I currently think about',
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteUrl: 'https://www.atizilla.com',
  siteRepo: 'https://github.com/ali-tunahan/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/avatar.png`,
  email: 'tunahan0735@gmail.com',
  github: 'https://github.com/ali-tunahan',
  linkedin: 'https://www.linkedin.com/in/ali-tunahan ',
  locale: 'en-US',
  stickyNav: false,
newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
