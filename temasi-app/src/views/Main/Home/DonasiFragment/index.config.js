import { STATUS_DELIVERED, STATUS_NOT_DELIVERED } from '../../../../config';

export default {
  data: [
    {
      id: 1,
      type: 2,
      title: 'Plasma Darah Golongan AB+',
      status: STATUS_NOT_DELIVERED,
    },
    {
      id: 2,
      type: 3,
      title: 'Plasma Darah Golongan AB+',
      status: STATUS_DELIVERED,
    },
    {
      id: 3,
      type: 1,
      title: 'Plasma Darah Golongan AB+',
      status: STATUS_DELIVERED,
    },
  ],
};
