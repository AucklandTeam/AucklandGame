import React from 'react'
import styles from 'styles/base.scss'
import { Link } from 'react-router-dom'
import LivesIcon from '../../Icons/LivesIcon'
import LivesIconEmpty from '../../Icons/LivesIconEmpty'

interface BottomMenuItemType {
	icon: string
	name: string
	url: string
	text: string
}

const bottomMenuItems = [
	{ icon: styles.asEdit, url: '/settings', name: '', text: 'settings' },
	{ icon: styles.asForum, url: '/forum', name: '', text: 'forum' },
	{ icon: styles.asPerson, url: '/profile', name: '', text: 'profile' },
	{ icon: styles.asTrophy, url: '/results', name: '', text: 'results' },
	{ icon: styles.asPower, url: '/', name: '', text: 'quit' }
]

const showLives = (lives: number) => {
	const iconsArray = []
	let emptyLives = 3 - lives
	while (lives > 0) {
		lives -= 1
		iconsArray.push(<LivesIcon />)
	}
	while (emptyLives > 0) {
		emptyLives -= 1
		iconsArray.push(<LivesIconEmpty />)
	}
	return <>{iconsArray.map((el: any) => el)}</>
}

const GameTopBar = ({ lives, score }: any) => (
	<div className={styles.gameTopBar}>
		<div className={styles.gameState}>
			{showLives(lives)}
			<div className={styles.gameScore}>Score: [{score}]</div>
		</div>
		<div className={styles.gameMenu}>
			{bottomMenuItems.map((item: BottomMenuItemType, index) => (
				<div className={styles.topMenuItem} key={item.url}>
					<Link to={item.url}>
						<i
							className={`${item.icon} 
                                    ${
										index === bottomMenuItems.length - 1
											? styles.quit
											: ''
									}`}
						/>
						<span>{item.name}</span>
					</Link>
				</div>
			))}
		</div>
	</div>
)

export default GameTopBar
