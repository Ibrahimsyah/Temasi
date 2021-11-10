const {Dokumen} = require('../services/db');

const insertDocument = async ({permohonanId, documents}) => {
  const documentsData = documents.map((document) => ({
    permohonan_id: permohonanId,
    document_url: document,
  }));

  await Dokumen.bulkCreate(documentsData);
};

module.exports = {
  insertDocument,
};
