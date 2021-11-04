export const STATUS_NOT_MATCHED = 0;
export const STATUS_MATCHED = 1;
export const STATUS_NOT_DELIVERED = 2;
export const STATUS_DELIVERED = 3;

export const STATUS_MESSAGE = {
  [STATUS_MATCHED]: 'Terdapat donatur yang bersedia membantu',
  [STATUS_NOT_DELIVERED]: 'Penyaluran bantuan belum dilakukan',
  [STATUS_DELIVERED]: 'Bantuan telah diterima',
};
