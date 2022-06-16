import React, { FC } from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import styles from 'client/styles/base.scss'
import TopicListItem from 'components/topicsListItem'
import { TopicListItems } from './shared'

const ForumMain: FC = () => (
    <NotGameWrap titlePage={'Auckland Forum'}>
        <table className={styles.forumsTable}>
            <thead>
            <tr>
                <th className={styles.forumTitleHeader}>Forums</th>
                <th className={styles.forumTopicsHeader}>Topics</th>
                <th className={styles.forumCommentsHeader}>Comments</th>
            </tr>
            </thead>
            <tbody>
            {TopicListItems.map(item => (
                <TopicListItem
                    key={item.topicTitle}
                    parentForumId={item.parentForumId}
                    topicTitle={item.topicTitle}
                    topicCommentsCount={item.topicCommentsCount}
                />
            ))}
            </tbody>
        </table>
    </NotGameWrap>
)

export default ForumMain
