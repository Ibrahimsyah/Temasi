process.env.NODE_ENV = 'TEST';
const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const {Pengguna, Profil} = require('../src/services/db');
const {DataIncompleteError, LoginError, UserNotFoundError} = require('../src/util/error');
chai.should();

chai.use(chaiHttp);

describe('AuthAPI', () => {
  beforeEach((done) => {
    Promise.all([
      Pengguna.destroy({where: {}}),
      Profil.destroy({where: {}}),
    ]).then(() => done()).catch((err) => console.log(err));
  });

  describe('POST /auth/register', () => {
    it('should return error if data is incomplete', () => {
      const payload = {};
      chai.request(server)
          .post('/auth/register')
          .send(payload)
          .end((_, res) => {
            res.should.have.status(DataIncompleteError.statusCode);
            res.body.should.have.property('error');
            expect(res.body.error).to.eq(DataIncompleteError.message);
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
          .end((res) => {
            res.should.have.status(201);
            res.body.should.have.property('userId');
            res.body.should.have.property('name');
            res.body.should.have.property('email');
            res.body.should.have.property('phoneNumber');
            res.body.should.have.property('token');
          });
    });
  });

  describe('POST /auth/login', () => {
    it('should show login success with token', async () => {
      const pengguna = {
        id: 'useas',
        email: 'test@gmail.com',
        password: '$2b$10$O/loc/FYkXzusbROaCLl3OILyZog/fO4c5Q1cjcWNuot6TyWSt3k.',
      };

      const profil = {
        pengguna_id: 'useas',
        full_name: 'fullName 1',
        phone_number: '12131213',
        is_male: 1,
      };

      await Pengguna.create(pengguna);
      await Profil.create(profil);

      const loginPayload = {
        email: 'test@gmail.com',
        password: 'asdzxca',
      };

      const res = await chai.request(server)
          .post('/auth/login')
          .send(loginPayload);
      res.should.have.status(200);
      res.body.should.have.property('userId');
      res.body.should.have.property('name');
      res.body.should.have.property('email');
      res.body.should.have.property('phoneNumber');
      res.body.should.have.property('token');
    });

    it('should show login error if the password is wrong', async () => {
      const pengguna = {
        id: 'useas',
        email: 'test@gmail.com',
        password: '$2b$10$O/loc/FYkXzusbROaCLl3OILyZog/fO4c5Q1cjcWNuot6TyWSt3k.',
      };

      const profil = {
        pengguna_id: 'useas',
        full_name: 'fullName 1',
        phone_number: '12131213',
        is_male: 1,
      };

      await Pengguna.create(pengguna);
      await Profil.create(profil);

      const loginPayload = {
        email: 'test@gmail.com',
        password: 'asdzxcas',
      };

      const res = await chai.request(server)
          .post('/auth/login')
          .send(loginPayload);
      res.should.have.status(LoginError.statusCode);
      expect(res.body.error).to.eq(LoginError.message);
    });

    it('should show login error if the account is not exist', async () => {
      const loginPayload = {
        email: 'test@gmail.com',
        password: 'asdzxcas',
      };

      const res = await chai.request(server)
          .post('/auth/login')
          .send(loginPayload);
      res.should.have.status(UserNotFoundError.statusCode);
      expect(res.body.error).to.eq(UserNotFoundError.message);
    });
  });
});


