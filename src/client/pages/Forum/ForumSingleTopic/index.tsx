import React, {FC, useEffect, useState} from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import {PageMeta} from 'components/pageMeta';
import TopicSingleMessage from 'components/topicSingleMessage';
import AddReplyForm from "components/addReplyForm";
import {useParams} from "react-router";
import {useForumCommentsInfo} from "src/core/ducks/forum/selectors";
import {useUserInfo} from "src/core/ducks/auth/selectors";
import {useAppDispatch} from "src/ssr";
import {getCommentsAction, getTopicAction} from "src/core/ducks/forum/actions";

const ForumSingleTopic: FC = () => {
    const dispatch = useAppDispatch();
    const [titlePage, setTitlePage] = useState('Destroy Asteroids')
    const {id} = useParams<{ id: string }>();
    const {user_id} = useUserInfo();
    const {data: comments} = useForumCommentsInfo();

    useEffect(() => {
        if (id) {
            dispatch(getTopicAction({id: +id, setData: setTitlePage}))
            dispatch(getCommentsAction({topicId: +id}))
        }
    }, [id])
    return (
        <NotGameWrap titlePage={titlePage}>
            <PageMeta
                title={`${titlePage} | Destroy Asteroids`}
                description='Game by Auckland Team on Yandex Practicum'
            />
            {comments && comments.map((item, index) => (
                <TopicSingleMessage
                    key={item.id}
                    id={item.id}
                    messageTitle={item.title}
                    topicId={+id}
                    authorId={user_id}
                    messageText={item.text}
                    userAvatar={item.author.avatar}
                    userName={item.author.name}
                />
            ))}
            <AddReplyForm isReply={false} topicId={+id} authorId={user_id}/>
        </NotGameWrap>
    )
}

export default ForumSingleTopic
