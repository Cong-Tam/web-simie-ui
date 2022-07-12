import img1 from '../../images/image1.png';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.png';
import img4 from '../../images/image4.jpg';

import img5 from '../../images/image5.png';
import img6 from '../../images/image6.png';
import img7 from '../../images/image7.png';

import config from '../../../config';

const bannerWithPath = [
    {
        title: 'Sale off',
        titleColor: 'white',
        link: 'Xem ngay',
        linkColor: 'black',
        img: img1,
        path: config.routes.catalog,
    },
    {
        title: 'Feed back',
        titleColor: 'white',
        link: 'Xem ngay',
        linkColor: 'white',
        img: img2,
        path: config.routes.catalog,
    },
    {
        title: 'Thiết kế',
        titleColor: 'black',
        link: 'Shop Now',
        linkColor: 'black',
        img: img3,
        path: config.routes.catalog,
    },
    {
        title: 'Concept',
        titleColor: 'white',
        link: 'Xem ngay',
        linkColor: 'white',
        img: img4,
        path: config.routes.catalog,
    },
];

const bannerNonePath = [
    {
        img: img5,
    },
    {
        img: img6,
    },
    {
        img: img7,
    },
];

export { bannerNonePath, bannerWithPath };
