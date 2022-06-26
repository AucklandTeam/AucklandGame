import React, { FC } from 'react'
import styles from 'styles/base.scss'
import { topicsListProps } from './types'
import { Link } from 'react-router-dom'
import { RouterPath } from 'shared/consts'

const TopicsListItem: FC<topicsListProps> = ({
	topicId,
	topicTitle,
	topicCommentsCount
}) => (
	<tr>
		<td className={styles.forumTitle}>
			<Link
				to={`${RouterPath.SingleTopic}/${topicId}`}
				title={topicTitle}
			>
				{topicTitle}
			</Link>
		</td>
		<td className={styles.forumCommentsCounter}>{topicCommentsCount}</td>
	</tr>
)

export default TopicsListItem
