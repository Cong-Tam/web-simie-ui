import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ViewModal.module.scss';

const cx = classNames.bind(styles);
function ViewModal({ active = false, CloseViewModal, children, className }) {
    const classes = cx('content', {
        [className]: className,
    });

    return (
        <div
            className={cx('wrapper', { active: active })}
            onClick={() => {
                CloseViewModal(false);
            }}
        >
            <div
                className={classes}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
}

ViewModal.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    CloseViewModal: PropTypes.func.isRequired,
};

export default ViewModal;
