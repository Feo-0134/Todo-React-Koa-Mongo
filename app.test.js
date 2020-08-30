const app = require('./app');
const request = require('supertest').agent(app.listen());


// describe('api test', function() {
//     test('hello world api', function(done) {
//         request
//         .get('/')
//         .expect('hello world')
//         .end(done)
//     });
// });

describe('todo api test', function() {
    test('todo add', function(done) {
        request
        .post('/api/todo/add/')
        .send({content: 'Test', finished: false})
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    });

    test('todo find', function(done) {
        request
        .get('/api/todo/find/')
        .expect(200)
        .end(function(err, res) {
            if (err) return err;
            done();
        });
    });

    test('todo delete', function(done) {
        request
        .post('/api/todo/delete/')
        .send({content: 'Test', finished: false})
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    });

    test('todo update', function(done) {
        request
        .post('/api/todo/update/')
        .send({content: 'Test', finished: true})
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    });
});
