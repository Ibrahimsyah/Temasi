import {Sequelize} from 'sequelize/types';

class UserRepository {
  _db: Sequelize;

  constructor(db : Sequelize) {
    this._db = db;
  }

  getAllUser = async () => {
    const result = await this._db.query('select 1 + 1 as result');
    return Promise.resolve(result);
  }
}

export default UserRepository;
