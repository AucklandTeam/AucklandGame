import React, { useEffect } from 'react'
import NotGameWrap from 'components/notGameWrap'
import styles from 'styles/base.scss'
import { useLeaderBordInfo } from 'src/core/ducks/scores/selectors'
import { getLeaderBoard } from 'src/core/ducks/scores/actions'
import { useAppDispatch } from 'src/ssr'

const byField =
	(field: string) =>
	(a: Record<string, string | number>, b: Record<string, string | number>) =>
		a[field] > b[field] ? -1 : 1

const Scores = () => {
	const dispatch = useAppDispatch()

	const { data: list } = useLeaderBordInfo()

	useEffect(() => {
		dispatch(getLeaderBoard())
	}, [])
	return (
		<NotGameWrap titlePage={'High-Scores'}>
			<table className={styles.highScoresTable}>
				<tbody>
					{list &&
						list.sort(byField('userScore')).map((item, i) => {
							return (
								<tr key={i} className={styles.scoreLine}>
									<td className={styles.userRange}>{++i}</td>
									<td className={styles.userLogin}>
										{item.login}
									</td>
									<td className={styles.userScore}>
										{item.aucklandScope}
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</NotGameWrap>
	)
}

export default Scores
