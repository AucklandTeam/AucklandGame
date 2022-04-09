import React, { FC } from 'react';
import styles from './BottomMenu.scss';

const BottomMenu: FC = ({ children}) => {
    return (
        <div className = { styles.bottomMenuWrap }>
                { children }
        </div>
    );
};

export default BottomMenu;
