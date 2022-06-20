import React, {FC, useEffect} from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import styles from 'client/styles/base.scss'
import TopicListItem from 'components/topicsListItem'
import {PageMeta} from 'components/pageMeta';
import {useParams} from "react-router";
import {useAppDispatch} from "src/ssr";
import {getTopicsAction} from "src/core/ducks/forum/actions";
import {useForumTopicsInfo} from "src/core/ducks/forum/selectors";

const ForumTopicsList: FC = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams<{id: string}>();
    const {data: topics} = useForumTopicsInfo();
    useEffect(()=>{
        if(id){
            dispatch(getTopicsAction({categoryId: +id}));
        }
    },[id])
    return (
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
                {topics && topics.map(item => (
                    <TopicListItem
                        key={item.id}
                        parentForumId={item.categoryId}
                        topicTitle={item.label}
                        topicCommentsCount={0}
                    />
                ))}
                </tbody>
            </table>
        </NotGameWrap>
    )
}

export default ForumTopicsList