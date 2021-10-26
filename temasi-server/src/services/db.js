const {Sequelize, DataTypes} = require('sequelize');
const {DSN, ENV} = require('../config');

const db = new Sequelize(DSN, {logging: false});

const Pengguna = db.define('pengguna', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'pengguna',
  timestamps: false,
});

const Profil = db.define('profil', {
  pengguna_id: {
    type: DataTypes.STRING,
    references: {
      model: Pengguna,
      key: 'id',
    },
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  is_male: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'profil',
  timestamps: false,
});

const Permohonan = db.define('permohonan', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  pengguna_id: {
    type: DataTypes.STRING,
    references: {
      model: Pengguna,
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.SMALLINT,
  },
  submit_date: {
    type: DataTypes.INTEGER,
  },
  timeout: {
    type: DataTypes.INTEGER,
  },
  longitude: {
    type: DataTypes.FLOAT,
  },
  latitude: {
    type: DataTypes.FLOAT,
  },
  document_url: {
    type: DataTypes.STRING,
  },
  note: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'permohonan',
  timestamps: false,
});

const Donasi = db.define('donasi', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  pengguna_id: {
    type: DataTypes.STRING,
    references: {
      model: Pengguna,
      key: 'id',
    },
    primaryKey: true,
  },
  permohonan_id: {
    type: DataTypes.STRING,
    references: {
      model: Permohonan,
      key: 'id',
    },
    primaryKey: true,
  },
  donasi_date: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'donasi',
  timestamps: false,
});

Pengguna.hasOne(Profil, {
  foreignKey: 'pengguna_id',
});

Profil.belongsTo(Pengguna, {
  foreignKey: 'pengguna_id',
});

Pengguna.belongsToMany(Permohonan, {through: Donasi});
Permohonan.belongsToMany(Pengguna, {through: Donasi});

Promise.all([
  Pengguna.sync(),
  Profil.sync(),
  Permohonan.sync(),
  Donasi.sync(),
  db.authenticate(),
]).then(() => {
  ENV !== 'TEST' && console.log('Connected to DB');
}).catch((err) => {
  ENV !== 'TEST' && console.error(err);
});

module.exports = {db, Donasi, Pengguna, Permohonan, Profil};
