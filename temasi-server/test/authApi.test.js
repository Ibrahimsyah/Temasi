process.env.NODE_ENV = 'TEST';
const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const {Pengguna, Profil} = require('../src/services/db');
chai.should();

chai.use(chaiHttp);

describe('AuthAPI', () => {
  beforeEach((done) => {
    Pengguna.destroy({truncate: true});
    Profil.destroy({truncate: true});
    done();
  });

  const dataIncompleteError = 'data belum lengkap';

  describe('POST /auth/register', () => {
    it('should return error if data is incomplete', () => {
      const payload = {};
      chai.request(server)
          .post('/auth/register')
          .send(payload)
          .end((_, res) => {
            res.should.have.status(400);
            res.body.should.have.property('error');
            expect(res.body.error).to.eq(dataIncompleteError);
          });
    });

    it('should insert new user to table', () => {
      const payload = {
        full_name: 'test',
        phone_number: '120131',
        is_male: false,
        email: 'test@gmail.com',
        password: 'asdzxcas',
        photo: 'asdzxd',
      };

      chai.request(server)
          .post('/auth/register')
          .send(payload)
          .end((_, res) => {
            res.should.have.status(201);
            res.body.should.have.property('userId');
            res.body.should.have.property('name');
            res.body.should.have.property('email');
            res.body.should.have.property('phoneNumber');
            res.body.should.have.property('token');
          });
    });
  });
});


