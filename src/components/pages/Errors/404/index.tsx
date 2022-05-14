import React from 'react';
import { Link } from 'react-router-dom';
import { RouterPath } from 'src/shared/consts';
//import styles from 'src/assets/base.scss';
import HomePageWrap from 'src/components/elements/HomePageWrap';

const Error404 = () => (
    <HomePageWrap>
        <h1>404</h1>
        <h4 className="centered">Oops! This page is lost in the void.</h4>
        <Link to={RouterPath.Main}>Return to Main Menu</Link>
    </HomePageWrap>
);

export default Error404;
