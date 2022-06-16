import React, { FC } from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import styles from 'client/styles/base.scss'
import ForumListItem from 'client/components/forumListItem'
import { ForumListItems } from './shared'
import {PageMeta} from 'components/pageMeta';

const ForumMain: FC = () => (
	<NotGameWrap titlePage={'Auckland Forum'}>
		<PageMeta
			title='Auckland Forum | Destroy Asteroids'
			description='Game by Auckland Team on Yandex Practicum'
		/>v
		<table className={styles.forumsTable}>
			<thead>
				<tr>
					<th className={styles.forumTitleHeader}>Forums</th>
					<th className={styles.forumTopicsHeader}>Topics</th>
					<th className={styles.forumCommentsHeader}>Comments</th>
				</tr>
			</thead>
			<tbody>
				{ForumListItems.map(item => (
					<ForumListItem
						key={item.forumTitle}
						forumTitle={item.forumTitle}
						forumTopicsCount={item.forumTopicsCount}
						forumCommentsCount={item.forumCommentsCount}
					/>
				))}
			</tbody>
		</table>
	</NotGameWrap>
)

export default ForumMain
