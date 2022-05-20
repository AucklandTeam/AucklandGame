import React, { FC } from 'react'
import styles from 'styles/base.scss'
import { forumListProps } from './types'
import Button from 'components/buttons'

const ForumListItem: FC<forumListProps> = ({
	forumTitle,
	forumTopicsCount,
	forumCommentsCount
}) => (
	<tr>
		<td className={styles.forumTitle}>{forumTitle}</td>
		<td className={styles.forumTopicsCounter}>
			{forumTopicsCount}
			<Button buttonType={'button'} buttonTitle={'+'} />
		</td>
		<td className={styles.forumCommentsCounter}>{forumCommentsCount}</td>
	</tr>
)

export default ForumListItem
