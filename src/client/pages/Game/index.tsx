import React, { useState } from 'react';
import CanvasComponent from './components/canvas/CanvasComponent';
//import styles from './Game.scss';
import styles from 'client/styles/base.scss'
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

    const getFullScreen = () => {
        if (document.fullscreenElement === null) {
            //document.documentElement.requestFullscreen();
            const section = document.querySelector("section");
            section.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const width = window.screen.width;
    const ratio = width/1279;
    const height = 720 * ratio;

    return (
        <div className={styles.gameMainWrap}>
            <section style={{position: 'relative',  width: '100vw', height: '100vh',}}>
                {
                    !isGameStart &&
                    <StartModal startGameHandler={startGameHandler} attempts={attempts} score={score} />
                }
                <GameTopBar lives={lives} score={score} />
                <CanvasComponent
                    setLives={setLives}
                    setScore={setScore}
                    isGameStart={isGameStart}
                    setIsGameStart={setIsGameStart}
                    getFullScreen={getFullScreen}
                    height={height}
                    width={width}
                />
            </section>
        </div>
    );
};

export default Game;
