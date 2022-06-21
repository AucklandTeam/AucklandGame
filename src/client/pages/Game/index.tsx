import React, { useState } from 'react'
import CanvasComponent from './components/canvas/CanvasComponent'
//import styles from './Game.scss';
import styles from 'client/styles/base.scss'
import GameTopBar from './components/GameTopBar/GameTopBar'
import StartModal from './components/StartModal'

const Game = () => {
	const [attempts, setAttempts] = useState(0)
	const [lives, setLives] = useState(3)
	const [score, setScore] = useState(0)
	const [isGameStart, setIsGameStart] = useState(false)
	const restartGame = () => {
		setAttempts(attempts + 1)
		setLives(3)
		setScore(0)
	}

	const startGameHandler = () => {
		restartGame()
		setIsGameStart(true)
	}

	const getFullScreen = () => {
		if (document.fullscreenElement === null) {
			//document.documentElement.requestFullscreen();
			const section = document.querySelector('section')
			section.requestFullscreen()
		} else {
			document.exitFullscreen()
		}
	}

	const w = window.innerWidth
	const h = window.innerHeight

	return (
		<div className={styles.gameMainWrap}>
			<section
				style={{
					position: 'relative',
					width: w + 'px',
					height: h + 'px'
				}}
			>
				{!isGameStart && (
					<StartModal
						startGameHandler={startGameHandler}
						attempts={attempts}
						score={score}
					/>
				)}
				<GameTopBar lives={lives} score={score} />
				<CanvasComponent
					setLives={setLives}
					setScore={setScore}
					isGameStart={isGameStart}
					setIsGameStart={setIsGameStart}
					getFullScreen={getFullScreen}
					height={h - 100}
					width={w}
				/>
			</section>
		</div>
	)
}

export default Game
