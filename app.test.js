const app = require('./app');
const request = require('supertest');


describe('api test', function() {
    test('hello world api', function(done) {
        request(app.listen(3000))
        .get('/')
        .expect('hello world')
        .end(done)
    });
});
