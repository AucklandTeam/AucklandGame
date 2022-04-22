import React, {FC} from 'react';
import styles from './HomePageWrap.scss';

type HomePageWrapProps = {
    titlePage?: string;
    titleContent?: string;
}

const HomePageWrap: FC<HomePageWrapProps> = (
    {
        children,
        titleContent
    }) => (
    <div className={styles.notGame}>
        <h1>Destroy Asteroids</h1>
        <main className={styles.w100}>
            <div className={styles.contentWrapCenter}>
                {titleContent && (<div className={styles.contentWrapTitle}>
                    <h3>{titleContent}</h3>
                </div>)}
                {children}
            </div>
        </main>
    </div>
);
export default HomePageWrap;