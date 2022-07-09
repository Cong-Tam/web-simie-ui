import classNames from 'classnames/bind';
import { useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MenuTablet.module.scss';

const cx = classNames.bind(styles);

function MenuTablet({ dataMenu, activeMenu }) {
    const [activeSubMenu, setActiveSubMenu] = useState(-1);
    const [activeLinkSubMenu, setActiveLinkSubMenu] = useState(-1);
    return (
        <div className={cx('wrapper', { active: activeMenu })}>
            {dataMenu.map((item, index) => (
                <div key={index}>
                    <Link
                        to={item.path}
                        className={cx('title')}
                        onClick={(e) => {
                            if (item.subNav) e.preventDefault();
                            if (activeSubMenu !== index) setActiveSubMenu(index);
                            else setActiveSubMenu(-1);
                        }}
                    >
                        <span>{item.title}</span>
                        {item.subNav && (
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className={cx('title-icon', { 'icon-rotate': activeSubMenu === index })}
                            />
                        )}
                    </Link>
                    {!!item.subNav && (
                        <div
                            className={cx('menu-item', {
                                active: activeSubMenu === index,
                            })}
                        >
                            {item.subNav.map((subItem, index1) => (
                                <div key={index1}>
                                    <Link
                                        to={subItem.path}
                                        className={cx('link')}
                                        onClick={(e) => {
                                            if (subItem.links) e.preventDefault();
                                            if (activeLinkSubMenu !== index1) setActiveLinkSubMenu(index1);
                                            else setActiveLinkSubMenu(-1);
                                        }}
                                    >
                                        <span>{subItem.title}</span>
                                        {subItem.links && (
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className={cx('title-icon', {
                                                    'icon-rotate': activeLinkSubMenu === index1,
                                                })}
                                            />
                                        )}
                                    </Link>
                                    {!!subItem.links && (
                                        <div
                                            className={cx('wrapper-link', {
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
    );
}

export default MenuTablet;
