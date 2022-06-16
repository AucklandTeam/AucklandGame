import React, {FC} from 'react';
import styles from 'styles/base.scss'
import { topicsListProps } from './types'
import {Link} from 'react-router-dom';
import {RouterPath} from 'shared/consts';

const TopicsListItem: FC<topicsListProps> =
	({
		parentForumId,
		topicTitle,
		topicCommentsCount
	}) => (
	<tr>
		<td className={styles.forumTitle}><Link to={RouterPath.Forum} title={topicTitle} /></td>
		<td className={styles.forumCommentsCounter}>{topicCommentsCount}</td>
	</tr>
)

export default TopicsListItem
