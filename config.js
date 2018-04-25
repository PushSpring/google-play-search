module.exports = {
  url: 'https://play.google.com/store/apps/details?id=%s&hl=%s',
  topAppsUrl: 'https://play.google.com/store/apps%s?authuser=0',
  searchUrl: 'http://play.google.com/store/search?q=%s&hl=en',
  mainSelector: '',
  selectors: [
    {
      selector: '.AHFaub[itemprop=name]',
      property: 'name'
    },
    {
      selector: '.jdjqLd .ZVWMWc .i4sPve span:first-of-type',
      property: 'developer'
    },
    {
      selector: '.ujDFqe[itemprop=image]',
      attr: 'src',
      property: 'icon'
    },
    {
      selector: 'a[itemprop=genre]',
      attr: 'href',
      property: 'categories'
    },
    {
      selector: '.BHMmbe',
      property: 'rating'
    },
    {
      selector: '.AYi5wd span',
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
      selector: 'div:contains("Content Rating") + .htlgb .htlgb div:first-of-type',
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
      selector: '.rxic6',
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
    }
  ]
};
