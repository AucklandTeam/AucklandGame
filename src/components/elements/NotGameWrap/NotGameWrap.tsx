import React, { FC } from 'react';
import styles from './NotGameWrap.scss';
import BottomMenu from "../BottomMenu/BottomMenu";
import BottomMenuItem from "../BottomMenuItem/BottomMenuItem";

const NotGameWrap: FC = ({ children}) => {
    return (
        <div className = { styles.notGame }>
            <div className = { styles.contentWrap }>
                { children }
                <BottomMenu children={
                    <>
                        <BottomMenuItem icon={ styles.asRocket } title={ 'Return to Game'} url={ '/game' } />
                        <BottomMenuItem icon={ styles.asTrophy } title={ 'High-Scores'} url={ '/results' } />
                        <BottomMenuItem icon={ styles.asEdit } title={ 'Edit Profile'} url={ '/settings' } />
                        <BottomMenuItem icon={ styles.asForum } title={ 'Forum'} url={ '/forum' } />
                        <BottomMenuItem icon={ styles.asPower } title={ 'Quit'} url={ '/' } />
                    </>
                }/>
            </div>
        </div>
    );
};

export default NotGameWrap;
