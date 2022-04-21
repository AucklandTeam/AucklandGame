import NotGameWrap from 'src/components/elements/NotGameWrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { RouterPath } from 'src/shared/consts';
import styles from 'src/assets/base.scss';

const Error404 = () => (
    <NotGameWrap titlePage={''}>
        <div className={styles.contentWrapCenter}>
            <h1>404</h1>
            <h4>Oops! This page is lost in the void.</h4>
            <Link to={RouterPath.Main}>Return to Main Menu</Link>
        </div>
    </NotGameWrap>
);

export default Error404;
