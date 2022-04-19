import NotGameWrap from 'src/components/elements/NotGameWrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { RouterPath } from 'src/shared/consts';
import styles from 'src/assets/base.scss';

const Error500 = () => {
    return (
        <NotGameWrap titlePage={''}>
            <div className={styles.contentWrapCenter}>
                <h1>500</h1>
                <h4>Don’t panic! We’ll fix it ASAP</h4>
                <Link to={RouterPath.Main}>Return to Main Menu</Link>
            </div>
        </NotGameWrap>
    );
};

export default Error500;
