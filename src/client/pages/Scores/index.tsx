import React from 'react'
import NotGameWrap from 'components/notGameWrap'
import styles from 'styles/base.scss'
import { scoreItems } from './shared'

const byField =
	(field: string) =>
	(a: Record<string, string | number>, b: Record<string, string | number>) =>
		a[field] > b[field] ? -1 : 1

const Scores = () => (
	<NotGameWrap titlePage={'High-Scores'}>
		<table className={styles.highScoresTable}>
			<tbody>
				{scoreItems.sort(byField('userScore')).map((item, i = 1) => {
					return (
						<tr key={i++} className={styles.scoreLine}>
							<td className={styles.userRange}>{i++}</td>
							<td className={styles.userLogin}>
								{item.userLogin}
							</td>
							<td className={styles.userScore}>
								{item.userScore}
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	</NotGameWrap>
)

export default Scores
