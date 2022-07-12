import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HeroSlider from '../../components/HeroSlider';
import heroSliderData from '../../assets/fake-data/hero-slider';
import Grid from '../../components/Grid/Grid';
import { bannerWithPath, bannerNonePath } from '../../assets/fake-data/banner';
import Banner from '../../components/Banner';
import avatar from '../../assets/images/avatar.png';
import furnitureKnowledge from '../../assets/fake-data/furniture-knowledge';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <HeroSlider data={heroSliderData} />
            <Grid col={4} mdCol={2} smCol={1} className={cx('banner-link-wrapper')}>
                {bannerWithPath.map((item, index) => (
                    <Banner data={item} key={index} />
                ))}
            </Grid>
            <Grid col={3} mdCol={3} smCol={1} className={cx('banner-wrapper')}>
                {bannerNonePath.map((item, index) => (
                    <Banner data={item} key={index} />
                ))}
            </Grid>
            <div className={cx('content')}>
                <div className={cx('slogan')}>
                    <h2 className={cx('slogan-title')}>"We shape our home and then our home shapes us"</h2>
                    <div className={cx('testimonial')}>
                        <div className={cx('testimonial-img')}>
                            <img src={avatar} alt="" />
                        </div>
                        <h4 className={cx('testimonial-name')}>Simie Team with love</h4>
                    </div>
                </div>
                <div className={cx('furniture-knowledge')}>
                    <h3>KIẾN THỨC NỘI THẤT</h3>
                    <ul>
                        {furnitureKnowledge.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
