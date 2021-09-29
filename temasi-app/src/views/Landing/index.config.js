import {Color} from '../../configs/style';

import imageLanding1 from '../../assets/images/landing1.png';
import imageLanding2 from '../../assets/images/landing2.png';

export default {
    carouselConfig: {
        style: {
            width: '100%',
            height: '80%',
        },
        looped: true,
        autoplay: true,
        delay: 3000,
    },
    carouselItems: [
        {
            id: 1,
            title: 'Permohonan Bantuan',
            description: 'Dapatkan bantuan perawatan isolasi mandiri COVID-19 dari tetangga, teman, dan saudara terdekat anda',
            image: imageLanding1,
        },
        {
            id: 2,
            title: 'Saling Berbagi Kebahagiaan',
            description: 'Bantu saudara kita berjuang melawan COVID-19 dengan memberikan uluran tangan. Anda dapat memberi atau menyewakan barang kepada mereka yang membutuhkan',
            image: imageLanding2,
        },
    ],
    statusBarStyle: {
        backgroundColor: Color.WHITE,
        barStyle: 'dark-content',
    },
};
