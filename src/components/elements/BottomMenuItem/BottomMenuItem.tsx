import React, { FC } from 'react';
import styles from './BottomMenuItem.scss';
import { Link, useLocation } from 'react-router-dom';

interface BottomMenuItemType {
    icon: string;
    title: string;
    url: string;
}
const isHidden = (url: string): string => {
    const location = useLocation();
    console.log(location.pathname, url);
    if (location.pathname === url) {
        return `${styles.bottomMenuItem} ${styles.hidden}`;
    } else {
        return `${styles.bottomMenuItem}`;
    }
};

const BottomMenuItem: FC<BottomMenuItemType> = ({ icon, title, url }) => {
    return (
        <Link
            to={url}
            className={isHidden(url)}
        >
            <i className={icon} />
            <span>{title}</span>
        </Link>
    );
};

export default BottomMenuItem;

