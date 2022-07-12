import classNames from 'classnames/bind';

import PropTypes from 'prop-types';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

function Grid({ children, col, mdCol, smCol, gap, className }) {
    const style = {
        gap: gap ? `${gap}px` : '0',
    };

    const classes = cx(
        'wrapper',
        { [`grid-col-${col}`]: col },
        { [`grid-col-md-${mdCol}`]: mdCol },
        { [`grid-col-sm-${smCol}`]: smCol },
        { [className]: className },
    );

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Grid.propTypes = {
    children: PropTypes.node.isRequired,
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number,
    className: PropTypes.string,
};

export default Grid;
