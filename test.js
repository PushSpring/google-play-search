var assert = require('assert');
var search = require('./');

describe('Parsing tests', function () {
  it('should read app details from Google Play store', function(done) {
    search.fetch('com.google.android.music', function(err, res) {
      assert.equal(res.name, 'Google Play Music');
      assert.equal(res.categories[0], 'MUSIC_AND_AUDIO');
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
    search.fetch('com.jabstone.jabtalk.basic', function(err, res) {
      assert.equal(res.categories.length, 2);
      done();
    });
  });

  it('should read developer website', function(done) {
    search.fetch('com.jabstone.jabtalk.basic', function(err, res) {
      //console.log(res);
      assert.equal(res.developerWebsite, 'http://www.jabstone.com');
      done();
    });
  });
});