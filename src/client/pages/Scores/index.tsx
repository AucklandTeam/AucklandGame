import React from 'react'
import NotGameWrap from 'components/notGameWrap'
import styles from 'styles/base.scss'
import { useLeaderBordInfo } from 'src/core/ducks/scores/selectors'
import { PageMeta } from 'components/pageMeta'
import {useTranslation} from 'react-i18next';

const byField =
	(field: string) =>
	(a: Record<string, string | number>, b: Record<string, string | number>) =>
		a[field] > b[field] ? -1 : 1

const Scores = () => {
	const { data: list } = useLeaderBordInfo()
	const { t } = useTranslation()

	return (
		<NotGameWrap titlePage={t('highScores')}>
			<PageMeta
				title={`${t('highScores')} | ${t('gameTitle')}`}
				description={t('gameDescription')}
			/>
			<table className={styles.highScoresTable}>
				<tbody>
					{list &&
						list.sort(byField('userScore')).map((item, i) => {
							return (
								<tr key={i}>
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
