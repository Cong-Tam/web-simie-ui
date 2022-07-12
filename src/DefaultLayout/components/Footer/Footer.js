import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Grid from '../../../components/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import CircleIconLink from '../../../components/CircleIconLink';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <Grid col={2} mdCol={2} smCol={1} className={cx('wrapper')}>
                <div className={cx('item')}>
                    <h3 className={cx('title')}>LIÊN HỆ</h3>
                    <ul>
                        <li>0906.523.783</li>
                        <li>
                            <a href="https://goo.gl/maps/vnaWB8v4frc8US7v9" target="_blank">
                                Lê Lợi – Hải Châu – Đà Nẵng
                            </a>
                        </li>
                        <li>Simiehomedanang@gmail.com</li>
                    </ul>
                    <div className={cx('icon')}>
                        <CircleIconLink href="https://www.facebook.com/Simiehome">
                            <FontAwesomeIcon icon={faFacebook} />
                        </CircleIconLink>
                        <CircleIconLink href="https://www.instagram.com/simie_home">
                            <FontAwesomeIcon icon={faInstagram} />
                        </CircleIconLink>
                    </div>
                </div>
                <div className={cx('item')}>
                    <h3 className={cx('title')}>QUY ĐỊNH – CHÍNH SÁCH</h3>
                    <ul>
                        <li>Hình thức thanh toán</li>
                        <li>Chính sách đổi trả – bảo hành</li>
                        <li>Chính sách giao hàng</li>
                        <li>Chính sách bán hàng – lưu kho</li>
                    </ul>
                </div>
            </Grid>
        </footer>
    );
}

export default Footer;
