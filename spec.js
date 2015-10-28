var request = require('supertest');
var keystone = require('./keystone');
keystone.init({ 'name': 'sample' });
var app           = keystone.app;

describe('loading express', function () {
  it('responds to /', function testSlash(done) {
    request(app)
      .get('/keystone/signin')
      .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
});