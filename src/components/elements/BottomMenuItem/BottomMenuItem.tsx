import React, { FC } from 'react';
//import styles from './BottomMenuItem.scss';
import { Link, useLocation } from 'react-router-dom';

interface BottomMenuItemType {
    icon: string;
    title: string;
    url: string;
    handler?: ()=>void;
}
const isHidden = (url: string): string => {
    const location = useLocation();
    if (location.pathname === url) {
        return 'bottomMenuItem hidden';
    } else {
        return 'bottomMenuItem';
    }
};

const BottomMenuItem: FC<BottomMenuItemType> = ({ icon, title, url, handler }) => {
    return (
        <Link
            to={url}
            className={isHidden(url)}
            onClick={(event)=>{
                if(handler){
                    event.preventDefault();
                    handler();
                }
            }}
        >
            <i className={icon} />
            <span>{title}</span>
        </Link>
    );
};

export default BottomMenuItem;

