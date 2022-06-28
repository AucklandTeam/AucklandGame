import React from 'react'
import styles from 'styles/base.scss'
import LivesIcon from '../../Icons/LivesIcon'
import LivesIconEmpty from '../../Icons/LivesIconEmpty'
import { useTranslation } from 'react-i18next'
import BottomMenuItem from 'components/bottomMenuItem';

const topMenuItems = [
	{ icon: styles.asTrophy, url: '/scores', name: 'highScores' },
	{ icon: styles.asPerson, url: '/profile', name: 'profile' },
	{ icon: styles.asEdit, url: '/settings', name: 'profileEdit' },
	{ icon: styles.asForum, url: '/forum', name: 'forum' },
	{ icon: styles.asPower, url: '/', name: 'quit' }
]
function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

const showLives = (lives: number) => {
	const iconsArray = []
	let emptyLives = 3 - lives
	while (lives > 0) {
		lives -= 1
		iconsArray.push(<LivesIcon key={getRandomInt(999)} />)
	}
	while (emptyLives > 0) {
		emptyLives -= 1
		iconsArray.push(<LivesIconEmpty key={getRandomInt(999)} />)
	}
	return <>{iconsArray.map((el: any) => el)}</>
}

const GameTopBar = ({ lives, score }: any) => {
	const {t} = useTranslation()
	return (
		<div className={styles.gameTopBar}>
			<div className={styles.gameState}>
				{showLives(lives)}
				<div className={styles.gameScore}>{t('score')}
					<span className={styles.accentedColor}>[</span>
						{score}
					<span className={styles.accentedColor}>]</span>
				</div>
			</div>
			<div style={{flexGrow: 1}}>&nbsp;</div>
			<div className={styles.gameMenu}>
				{ topMenuItems.map(({ name, url, icon }) => (
						<BottomMenuItem
							hideTitle={false}
							key={url}
							icon={icon}
							title={name}
							url={url}
						/>)) }
					</div>
			</div>
	)
}

export default GameTopBar
