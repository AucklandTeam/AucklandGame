import React, { FC } from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import {PageMeta} from 'components/pageMeta';
import AddReplyForm from 'components/addReplyForm';
import TopicSingleMessage from 'components/topicSingleMessage';

const ForumSingleTopic: FC = () => {
    const titlePage = 'var_topic.title'
    return (
        <NotGameWrap titlePage={titlePage}>
            <PageMeta
                title= {`${titlePage} | Destroy Asteroids`}
                description='Game by Auckland Team on Yandex Practicum'
            />
            <TopicSingleMessage />
            <AddReplyForm />
        </NotGameWrap>
    )
}

export default ForumSingleTopic
