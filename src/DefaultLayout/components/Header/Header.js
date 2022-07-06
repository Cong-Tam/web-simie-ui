import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import config from '../../../config';
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.jpg';
import { BoxIcon, MenuIcon, UserIcon } from '../../../components/Icons';

const cx = classNames.bind(styles);

const mainNav = [
    {
        title: 'Giới thiệu',
        path: config.routes.introduction,
    },
    {
        title: 'Danh mục sản phẩm',
        path: config.routes.catalog,
        subNav: [
            {
                title: 'Bàn',
                path: `${config.routes.catalog}/ban`,
                links: [
                    {
                        title: 'Bàn làm việc',
                        path: `${config.routes.catalog}/ban`,
                    },
                    {
                        title: 'Bàn trà',
                        path: `${config.routes.catalog}/ban`,
                    },
                    {
                        title: 'Bàn trang điểm',
                        path: `${config.routes.catalog}/ban`,
                    },
                    {
                        title: 'Bàn ăn',
                        path: `${config.routes.catalog}/ban`,
                    },
                ],
            },
            {
                title: 'Giường',
                path: `${config.routes.catalog}/`,
                links: [
                    {
                        title: 'Giường gỗ công nghiệp',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Giường gỗ tự nhiên',
                        path: `${config.routes.catalog}/`,
                    },
                ],
            },
            {
                title: 'Kệ',
                path: `${config.routes.catalog}/`,
                links: [
                    {
                        title: 'Kệ sách',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Kệ TiVi',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Kệ trang trí',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Kệ đầu giường',
                        path: `${config.routes.catalog}/`,
                    },
                ],
            },
            {
                title: 'Ghế',
                path: `${config.routes.catalog}/`,
                links: [
                    {
                        title: 'Ghế Sofa',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Ghế bành',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Ghế đơn',
                        path: `${config.routes.catalog}/`,
                    },
                ],
            },
            {
                title: 'Tủ',
                path: `${config.routes.catalog}/`,
                links: [
                    {
                        title: 'Tủ quần áo',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Tủ giày',
                        path: `${config.routes.catalog}/`,
                    },
                    {
                        title: 'Tủ lưu trữ',
                        path: `${config.routes.catalog}/`,
                    },
                ],
            },
            {
                title: 'Gương',
                path: `${config.routes.catalog}/`,
            },
            {
                title: 'Nội thất trẻ em',
                path: `${config.routes.catalog}/`,
            },
        ],
    },
    {
        title: 'Trang trí và gia dụng',
        path: `${config.routes.catalog}/trang-tri-gia-dung`,
        subNav: [
            {
                title: 'Đèn',
                path: `${config.routes.catalog}/ban`,
            },
            {
                title: 'Gương để bàn',
                path: `${config.routes.catalog}/`,
            },
            {
                title: 'Giỏ đựng đồ dùng',
                path: `${config.routes.catalog}/`,
            },
            {
                title: 'Khung treo, kệ để bàn',
                path: `${config.routes.catalog}/`,
            },
            {
                title: 'Thảm',
                path: `${config.routes.catalog}/`,
            },
        ],
    },
    {
        title: 'Bộ sưu tập',
        path: `${config.routes.catalog}/bo-suu-tap`,
        subNav: [
            {
                title: 'HIA concept',
                path: `${config.routes.catalog}/ban`,
            },
            {
                title: 'ALI concept',
                path: `${config.routes.catalog}/`,
            },
            {
                title: 'YEN concept',
                path: `${config.routes.catalog}/`,
            },
            {
                title: 'RETRO concept',
                path: `${config.routes.catalog}/`,
            },
        ],
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={logo} alt="" />
                </Link>

                <nav className={cx('main-nav')}>
                    {mainNav.map((nav, index) => (
                        <div key={index} className={cx('wrapper-sub-nav')}>
                            <Tippy
                                offset={[0, 0]}
                                interactive
                                render={(attrs) => {
                                    if (!!nav.subNav)
                                        return (
                                            <div
                                                className={cx('sub-nav', {
                                                    'sub-nav-single': !nav.subNav[0].links,
                                                })}
                                                tabIndex="-1"
                                                {...attrs}
                                            >
                                                {nav.subNav.map((subItem, index1) => (
                                                    <div className={cx('sub-nav-item')} key={index1}>
                                                        <Link to={subItem.path} className={cx('sub-nav-title')}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                        {!!subItem.links &&
                                                            subItem.links.map((link, index2) => (
                                                                <div key={index2} className={cx('link')}>
                                                                    <Link to={link.path}>
                                                                        <span>{link.title}</span>
                                                                    </Link>
                                                                </div>
                                                            ))}
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                }}
                            >
                                <div className={cx('nav-item')}>
                                    <Link to={nav.path} key={index} className={cx('nav-link')}>
                                        <span>{nav.title}</span>
                                    </Link>
                                </div>
                            </Tippy>
                        </div>
                    ))}
                </nav>

                <div className={cx('actions')}>
                    <button className={cx('action-btn')}>
                        <UserIcon />
                    </button>
                    <button className={cx('action-btn')}>
                        <BoxIcon />
                        <span className={cx('quantity')}>12</span>
                    </button>
                    <button className={cx('action-btn')}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
