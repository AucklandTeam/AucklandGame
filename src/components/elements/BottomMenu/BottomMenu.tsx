import React, { FC } from 'react';
//import styles from './BottomMenu.scss';

const BottomMenu: FC = ({ children }) => {
    return <div className="bottomMenuWrap">{children}</div>;
};

export default BottomMenu;
