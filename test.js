var assert = require('assert');
var search = require('./');

describe('Parsing tests', function () {
  it('should read app details from Google Play store', function(done) {
    search.fetch('com.google.android.music', function(err, res) {
      assert.strictEqual(res.name, "Google Play Music");
      assert.strictEqual(res.categories[0], "MUSIC_AND_AUDIO");
      done();
    });
  });
  
  it('should read additional properties', function(done) {
    search.fetch('bbc.mobile.news.ww', function(err, res) {
      assert(res.softwareVersion);
      assert(res.contentRating);
      done();
    });
  });

  it('should read categories', function(done) {
    search.fetch("com.instagram.android", function (err, res) {
      // console.log(res);
      assert.strictEqual(res.categories.length, 1);
      assert.strictEqual(res.categories[0], "SOCIAL");
      done();
    });
  });

  it('should read developer website', function(done) {
    search.fetch('com.jabstone.jabtalk.basic', function(err, res) {
      //console.log(res);
      assert.strictEqual(res.developerWebsite, "http://www.jabstone.com");
      done();
    });
  });

  it("should read target age", function (done) {
    search.fetch("com.tocaboca.tocakitchen2", function (err, res) {
      // console.log(res);
      assert.strictEqual(res.targetAge, "Ages 6-8");
      done();
    });
  });
});