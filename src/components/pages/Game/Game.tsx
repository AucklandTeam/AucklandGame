import React, { useEffect, useState } from 'react';
import CanvasComponent from './components/canvas/CanvasComponent';
import styles from './Game.scss';
import GameTopBar from '../../elements/GameTopBar/GameTopBar';

const Game = () => {
    const [attempts, setAttempts] = useState(1);

    const restartGame = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div className={styles.gameMainWrap}>
            <GameTopBar restartGame={restartGame} />
            <CanvasComponent attempts={attempts} />
        </div>
    );
};

export default Game;
