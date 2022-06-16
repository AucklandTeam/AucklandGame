import React, { FC } from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import styles from 'client/styles/base.scss'
import TopicListItem from 'components/topicsListItem'
import { TopicListItems } from './shared'
import {PageMeta} from 'components/pageMeta';

const ForumTopicsList: FC = () => (
    <NotGameWrap titlePage={'Auckland Forum'}>
        <PageMeta
            title='Auckland Forum | Destroy Asteroids'
            description='Game by Auckland Team on Yandex Practicum'
        />
        <table className={styles.forumsTable}>
            <thead>
            <tr>
                <th className={styles.forumTitleHeader}>Topics</th>
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

export default ForumTopicsList
