import React from 'react';
import { Link } from 'react-router-dom';
import { RouterPath } from 'src/shared/consts';
import styles from 'src/assets/base.scss';
import HomePageWrap from 'src/components/elements/HomePageWrap';

const Error500 = () => (
    <HomePageWrap>
        <h1>500</h1>
        <h4 className={styles.centered}>Don’t panic! We’ll fix it ASAP</h4>
        <Link to={RouterPath.Main}>Return to Main Menu</Link>
    </HomePageWrap>
);

export default Error500;
