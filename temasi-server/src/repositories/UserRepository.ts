import {Knex} from 'knex';

class UserRepository {
  _db: Knex;

  constructor(db : Knex) {
    this._db = db;
  }

  getAllUser = async () => {
    const result = await this._db.raw('select 1 + 1 as result');
    return Promise.resolve(result);
  }
}

export default UserRepository;
