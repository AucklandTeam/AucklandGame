import React, { useEffect, useState } from 'react';
import CanvasComponent from './components/canvas/CanvasComponent';
import styles from './Game.scss';
import GameTopBar from './components/GameTopBar/GameTopBar';

const Game = () => {
    const [attempts, setAttempts] = useState(1);
    const [lives, setLives] = useState(3);
    const [score, setScore] = useState(0);
    const restartGame = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div className={styles.gameMainWrap}>
            <GameTopBar restartGame={restartGame} lives={lives} score={score} />
            <CanvasComponent attempts={attempts} setLives={setLives} setScore={setScore} />
        </div>
    );
};

export default Game;
