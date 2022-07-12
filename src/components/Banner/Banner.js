import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ data }) {
    return (
        <div className={cx('wrapper')}>
            {!!data.path ? (
                <Link to={data.path}>
                    <div className={cx('item')}>
                        <div className={cx('image', { 'animate-image': !!data.path })}>
                            <img src={data.img} alt="" />
                        </div>
                        <div className={cx('content')}>
                            <h3
                                className={cx(
                                    'title',
                                    { white: data.titleColor === 'white' },
                                    { black: data.titleColor === 'black' },
                                )}
                            >
                                {data.title}
                            </h3>
                            <p
                                className={cx(
                                    'link',
                                    { white: data.linkColor === 'white' },
                                    { black: data.linkColor === 'black' },
                                )}
                            >
                                {data.link}
                            </p>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className={cx('item')}>
                    <div className={cx('image')}>
                        <img src={data.img} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
}

Banner.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Banner;
