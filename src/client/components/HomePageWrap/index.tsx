import React, { FC } from 'react';
import './HomePageWrap.scss';

type HomePageWrapProps = {
    titlePage?: string;
    titleContent?: string;
};

const HomePageWrap: FC<HomePageWrapProps> = ({ children, titleContent }) => (
    <div className="notGame">
        <h1>Destroy Asteroids</h1>
        <main className="w100">
            <div className="contentWrapCenter">
                {titleContent && (
                    <div className="contentWrapTitle">
                        <h3>{titleContent}</h3>
                    </div>
                )}
                {children}
            </div>
        </main>
    </div>
);

export default HomePageWrap;
