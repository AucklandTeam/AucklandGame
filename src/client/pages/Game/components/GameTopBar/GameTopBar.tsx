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

const topMenuItems = [
	{ icon: styles.asPerson, url: '/profile', name: '', text: 'profile' },
	{ icon: styles.asEdit, url: '/settings', name: '', text: 'settings' },
	{ icon: styles.asTrophy, url: '/scores', name: '', text: 'scores' },
	{ icon: styles.asForum, url: '/forum', name: '', text: 'forum' },
	{ icon: styles.asPower, url: '/', name: '', text: 'quit' }
]

const showLives = (lives: number) => {
	const iconsArray = []
	let emptyLives = 3 - lives
	while (lives > 0) {
		lives -= 1
		iconsArray.push(<LivesIcon key={lives}/>)
	}
	while (emptyLives > 0) {
		emptyLives -= 1
		iconsArray.push(<LivesIconEmpty key={lives}/>)
	}
	return <>{iconsArray.map((el: any) => el)}</>
}

const GameTopBar = ({ lives, score }: any) => (
	<div className={styles.gameTopBar}>
		<div className={styles.gameState}>
			{showLives(lives)}
			<div className={styles.gameScore}>Score: [{score}]</div>
		</div>
		<div style={{ flexGrow: 1}}>&nbsp;</div>
		<div className={styles.gameMenu}>
			{topMenuItems.map((item: BottomMenuItemType, index) => (
				<div key={item.url} className={styles.topMenuItem}>
					<Link to={item.url}>
						<i
							className={`${item.icon} 
                                    ${
										index === topMenuItems.length - 1
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
