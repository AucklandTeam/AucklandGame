import React, { FC } from 'react';
import styles from './BottomMenuItem.scss';
import { Link } from "react-router-dom";

interface BottomMenuItemType {
    icon: string;
    title: string;
    url: string;
}

const BottomMenuItem: FC<BottomMenuItemType> = ({ icon, title, url }) => {
    return (
        <Link to={ url }  className = { styles.bottomMenuItem }>
            <i className={ icon } />
            <span>{ title }</span>
        </Link>
    );
};

export default BottomMenuItem;
