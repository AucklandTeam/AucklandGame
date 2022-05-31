import React, { useState } from 'react';
import CanvasComponent from './components/canvas/CanvasComponent';
import styles from 'styles/base.scss';
import GameTopBar from './components/GameTopBar/GameTopBar';
import StartModal from './components/StartModal';

const Game = () => {
    const [attempts, setAttempts] = useState(0);
    const [lives, setLives] = useState(3);
    const [score, setScore] = useState(0);
    const [isGameStart, setIsGameStart] = useState(false);
    const restartGame = () => {
        setAttempts(attempts + 1);
        setLives(3);
        setScore(0);
    };

    const startGameHandler = () => {
        restartGame();
        setIsGameStart(true);
    };

    return (
        <div className={styles.gameMainWrap}>
            <GameTopBar lives={lives} score={score} />
            <div>
                {
                    !isGameStart &&
                        <StartModal startGameHandler={startGameHandler} attempts={attempts} score={score} />
                }
                <CanvasComponent
                    setLives={setLives}
                    setScore={setScore}
                    isGameStart={isGameStart}
                    setIsGameStart={setIsGameStart}
                />
            </div>
        </div>
    );
};

export default Game;
