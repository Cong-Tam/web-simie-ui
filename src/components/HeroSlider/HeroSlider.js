import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import styles from './HeroSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cx = classNames.bind(styles);

function HeroSlider({ data }) {
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className={cx('item')}>
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
};

export default HeroSlider;
