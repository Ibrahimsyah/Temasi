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
  full_name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  is_male: {
    type: DataTypes.BOOLEAN,
  },
  photo: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'pengguna',
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
    type: DataTypes.DATE,
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
  address: {
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
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  received_date: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'donasi',
  timestamps: false,
});

const Dokumen = db.define('dokumen', {
  document_url: {
    type: DataTypes.STRING,
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
}, {
  tableName: 'dokumen',
  timestamps: false,
});

Pengguna.belongsToMany(Permohonan, {through: Donasi});
Permohonan.belongsToMany(Pengguna, {through: Donasi});
Permohonan.hasMany(Dokumen);

const migrateDb = async () => {
  await Pengguna.sync(),
  await Permohonan.sync(),
  await Dokumen.sync(),
  await Donasi.sync(),
  await db.authenticate();
};

migrateDb().then(() => {
  ENV !== 'TEST' && console.log('Connected to DB');
}).catch((err) => {
  ENV !== 'TEST' && console.error(err);
});

module.exports = {db, Donasi, Pengguna, Permohonan, Dokumen};
