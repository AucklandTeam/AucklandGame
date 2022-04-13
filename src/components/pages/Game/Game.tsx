import React, { useEffect } from 'react';
import CanvasComponent from './components/canvas/CanvasComponent';
import styles from './Game.scss';

const Game = () => {
    return (
        <div className={styles.gameMainWrap}>
            <CanvasComponent />
        </div>
    );
};

export default Game;
