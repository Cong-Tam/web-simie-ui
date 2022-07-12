import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './DefaultLayout.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    const scrollRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                scrollRef.current.classList.add(cx('active'));
            } else {
                scrollRef.current.classList.remove(cx('active'));
            }
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
            <div className={cx('scroll-top')} onClick={scrollTop} ref={scrollRef}>
                <FontAwesomeIcon icon={faChevronUp} className={cx('icon')} />
            </div>
        </div>
    );
}

export default DefaultLayout;
