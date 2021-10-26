process.env.NODE_ENV = 'TEST';
const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
chai.should();

chai.use(chaiHttp);

describe('CommonAPI', () => {
  describe('GET /ping', () => {
    it('should return pong', (done) => {
      chai.request(server)
          .get('/ping')
          .end((err, res) => {
            res.should.have.status(200);
            expect(res.text).to.eq('Pong!');
            done();
          });
    });
  });

  describe('GET /', () => {
    it('should return welcome message', (done) => {
      chai.request(server)
          .get('/')
          .end((_, res) => {
            res.should.have.status(200);
            expect(res.text).to.eq('Welcome to Temasi API!');
            done();
          });
    });
  });
});
