import React, {useEffect, useState} from 'react';
import CanvasComponent from './components/canvas/CanvasComponent';
//import styles from './Game.scss';
import styles from 'client/styles/base.scss'
import GameTopBar from './components/GameTopBar/GameTopBar';
import StartModal from './components/StartModal';
import {useAppDispatch} from "src/ssr";
import {addUserToLeaderBoardAction} from "src/core/ducks/scores/actions";

const Game = () => {
	const dispatch = useAppDispatch();
	const [attempts, setAttempts] = useState(0);
	const [lives, setLives] = useState(3);
	const [score, setScore] = useState(0);
	const [isGameStart, setIsGameStart] = useState(false);
	const [resize, setResize] = useState(0)
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
			section.requestFullscreen()
			setTimeout(() => {
				setResize(resize + 1)
			}, 100)


		} else {
			document.exitFullscreen();
			setTimeout(() => {
				setResize(resize + 1)
			}, 100)
		}
	};

	var w = window.innerWidth;
	var h = window.innerHeight;

	useEffect(()=>{
		if(lives === 0){
			dispatch(addUserToLeaderBoardAction(score));
		}

	},[lives])

	return (
		<div className={styles.gameMainWrap}>
			<section style={{position: 'relative',  width: w + 'px', height: h + 'px',}}>
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
					height={h - 100}
					width={w}
					resize={resize}
				/>
			</section>
		</div>
	);
};

export default Game;
