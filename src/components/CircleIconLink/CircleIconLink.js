import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CircleIconLink.module.scss';
import { CircleIcon } from '../Icons';

const cx = classNames.bind(styles);

function CircleIconLink({ children, href }) {
    return (
        <a href={href} target="_blank">
            <div className={cx('circle')}>
                <div className={cx('icon')}>{children}</div>
                <CircleIcon className={cx('circle-svg')} />
            </div>
        </a>
    );
}

CircleIconLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

export default CircleIconLink;
