module.exports = {
  url: 'https://play.google.com/store/apps/details?id=%s&hl=%s',
  topAppsUrl: 'https://play.google.com/store/apps%s?authuser=0',
  searchUrl: 'http://play.google.com/store/search?q=%s&hl=en',
  mainSelector: '',
  selectors: [
    {
      selector: 'h1[itemprop=name]',
      property: 'name'
    },
    {
      selector: 'div:contains("Offered By") + span',
      property: 'developer'
    },
    {
      selector: 'img[itemprop=image]',
      attr: 'src',
      property: 'icon'
    },
    {
      selector: 'a[itemprop=genre]',
      attr: 'href',
      property: 'categories'
    },
    {
      selector: 'div[aria-label^="Rated"]',
      property: 'rating'
    },
    {
      selector: 'span[aria-label$="ratings"]:first-of-type',
      property: 'ratingCount'
    },
    {
      selector: 'div:contains("Requires Android") + span',
      property: 'requiredOS'
    },
    {
      selector: 'div:contains("Current Version") + span',
      property: 'softwareVersion'
    },
    {
      selector: 'div:contains("Content Rating") + span div:first-child span:first-child div:first-child',
      property: 'contentRating'
    },
    {
      selector: 'span[itemprop=offers] meta[itemprop=price]',
      attr: 'content',
      property: 'price'
    },
    {
      selector: 'div[itemprop=description]',
      property: 'description'
    },
    {
      selector: ':contains("Contains Ads")',
      property: 'containsAds'
    },
    {
      selector: 'a:contains("Visit website")',
      property: 'developerWebsite',
      attr: 'href'
    },
    {
      selector: 'a:contains("@")',
      property: 'developerEmail',
      attr: 'href'
    },
    {
      selector: 'a:contains("Privacy Policy")',
      property: 'privacyPolicy',
      attr: 'href'
    },
    {
      selector: 'img[alt^="Approved by teachers for"] + span',
      property: 'targetAge',
    }
  ]
};
