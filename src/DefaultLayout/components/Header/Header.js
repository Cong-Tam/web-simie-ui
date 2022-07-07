import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import config from '../../../config';
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.jpg';
import { BoxIcon, MenuIcon, UserIcon, MenuBarsIcon } from '../../../components/Icons';

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
                        path: `${config.routes.catalog}/ban/ban-lam-viec`,
                    },
                    {
                        title: 'Bàn trà',
                        path: `${config.routes.catalog}/ban/ban-tra`,
                    },
                    {
                        title: 'Bàn trang điểm',
                        path: `${config.routes.catalog}/ban/ban-trang-diem`,
                    },
                    {
                        title: 'Bàn ăn',
                        path: `${config.routes.catalog}/ban/ban-an`,
                    },
                ],
            },
            {
                title: 'Giường',
                path: `${config.routes.catalog}/giuong`,
                links: [
                    {
                        title: 'Giường gỗ công nghiệp',
                        path: `${config.routes.catalog}/giuong/giuong-go-cong-nghiep`,
                    },
                    {
                        title: 'Giường gỗ tự nhiên',
                        path: `${config.routes.catalog}/giuong/giuong-go-tu-nhien`,
                    },
                ],
            },
            {
                title: 'Kệ',
                path: `${config.routes.catalog}/ke`,
                links: [
                    {
                        title: 'Kệ sách',
                        path: `${config.routes.catalog}/ke/ke-sach`,
                    },
                    {
                        title: 'Kệ TiVi',
                        path: `${config.routes.catalog}/ke/ke-tivi`,
                    },
                    {
                        title: 'Kệ trang trí',
                        path: `${config.routes.catalog}/ke/ke-trang-tri`,
                    },
                    {
                        title: 'Kệ đầu giường',
                        path: `${config.routes.catalog}/ke/ke-dau-giuong`,
                    },
                ],
            },
            {
                title: 'Ghế',
                path: `${config.routes.catalog}/ghe`,
                links: [
                    {
                        title: 'Ghế Sofa',
                        path: `${config.routes.catalog}/ghe/ghe-sofa`,
                    },
                    {
                        title: 'Ghế bành',
                        path: `${config.routes.catalog}/ghe/ghe-banh`,
                    },
                    {
                        title: 'Ghế đơn',
                        path: `${config.routes.catalog}/ghe/ghe-don`,
                    },
                ],
            },
            {
                title: 'Tủ',
                path: `${config.routes.catalog}/tu`,
                links: [
                    {
                        title: 'Tủ quần áo',
                        path: `${config.routes.catalog}/tu/tu-quan-ao`,
                    },
                    {
                        title: 'Tủ giày',
                        path: `${config.routes.catalog}/tu/tu-giay`,
                    },
                    {
                        title: 'Tủ lưu trữ',
                        path: `${config.routes.catalog}/tu/tu-luu-tru`,
                    },
                ],
            },
            {
                title: 'Gương',
                path: `${config.routes.catalog}/guong`,
            },
            {
                title: 'Nội thất trẻ em',
                path: `${config.routes.catalog}/noi-that-tre-em`,
            },
        ],
    },
    {
        title: 'Trang trí và gia dụng',
        path: `${config.routes.catalog}/trang-tri-gia-dung`,
        subNav: [
            {
                title: 'Đèn',
                path: `${config.routes.catalog}/trang-tri-gia-dung/den`,
            },
            {
                title: 'Gương để bàn',
                path: `${config.routes.catalog}/trang-tri-gia-dung/guong-de-ban`,
            },
            {
                title: 'Giỏ đựng đồ dùng',
                path: `${config.routes.catalog}/trang-tri-gia-dung/gio-dung`,
            },
            {
                title: 'Khung treo, kệ để bàn',
                path: `${config.routes.catalog}/trang-tri-gia-dung/khung-treo-ke-de-ban`,
            },
            {
                title: 'Thảm',
                path: `${config.routes.catalog}/trang-tri-gia-dung/tham`,
            },
        ],
    },
    {
        title: 'Bộ sưu tập',
        path: `${config.routes.catalog}/bo-suu-tap`,
        subNav: [
            {
                title: 'HIA concept',
                path: `${config.routes.catalog}/bo-suu-tap/hia-concept`,
            },
            {
                title: 'ALI concept',
                path: `${config.routes.catalog}/bo-suu-tap/ali-concept`,
            },
            {
                title: 'YEN concept',
                path: `${config.routes.catalog}/bo-suu-tap/yen-concept`,
            },
            {
                title: 'RETRO concept',
                path: `${config.routes.catalog}/bo-suu-tap/retro-concept`,
            },
        ],
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(-1);
    const [activeLinkSubMenu, setActiveLinkSubMenu] = useState(-1);

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
                                interactive
                                offset={[0, 0]}
                                delay={[200, 200]}
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
                                                        <Link
                                                            to={subItem.path}
                                                            className={cx('sub-nav-title', 'title')}
                                                        >
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
                                    <Link to={nav.path} key={index} className={cx('nav-link', 'title')}>
                                        <span>{nav.title}</span>
                                    </Link>
                                </div>
                            </Tippy>
                        </div>
                    ))}
                </nav>

                <div className={cx('actions')}>
                    <button className={cx('action-btn', 'btn-pc')}>
                        <UserIcon />
                    </button>
                    <button className={cx('action-btn')}>
                        <BoxIcon />
                        <span className={cx('quantity')}>12</span>
                    </button>
                    <button className={cx('action-btn', 'btn-pc')}>
                        <MenuIcon />
                    </button>
                    <button className={cx('action-btn', 'btn-mobile')} onClick={() => setActiveMenu(!activeMenu)}>
                        <MenuBarsIcon />
                    </button>
                </div>
            </div>
            <div className={cx('menu-mobile', { active: activeMenu })}>
                {mainNav.map((item, index) => (
                    <div key={index}>
                        <Link
                            to={item.path}
                            className={cx('mobile-title', 'title')}
                            onClick={(e) => {
                                if (item.subNav) e.preventDefault();
                                setActiveSubMenu(index);
                            }}
                        >
                            {item.title}
                        </Link>
                        {!!item.subNav && (
                            <div className={cx('menu-mobile-item', { active: activeSubMenu === index })}>
                                {item.subNav.map((subItem, index1) => (
                                    <div key={index1}>
                                        <Link
                                            to={subItem.path}
                                            className={cx('link')}
                                            onClick={(e) => {
                                                if (subItem.links) e.preventDefault();
                                                setActiveLinkSubMenu(index1);
                                            }}
                                        >
                                            {subItem.title}
                                        </Link>
                                        {!!subItem.links && (
                                            <div
                                                className={cx('link-menu-mobile', {
                                                    active: activeLinkSubMenu === index1,
                                                })}
                                            >
                                                {subItem.links.map((link, index2) => (
                                                    <div key={index2}>
                                                        <Link to={link.path} className={cx('link')}>
                                                            {link.title}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </header>
    );
}

export default Header;
