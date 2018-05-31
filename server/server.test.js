const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
  it('should return start page', (done) => {
 request(app)
  .get('/')
  .expect(404)
  .expect((res) => {
   expect(res.body).toInclude({
   error: 'Page not found.'
  });
}).end(done);
});
});

describe('GET /users', () => {
 it('should return my user', (done) => {
 request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
  expect(res.body).toInclude({
   name: 'Ahmet',
   age: 23
    });
    }).end(done);
    });
  });
});
