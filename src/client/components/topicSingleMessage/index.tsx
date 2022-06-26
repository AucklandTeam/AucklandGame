import React, {
    FC,
    useState
} from 'react';
import styles from 'styles/base.scss'
import Avatar from 'components/avatar'
import Button from 'components/buttons'
import noImage from 'static/images/noImage.svg'
import AddReplyForm from 'components/addReplyForm';
import {Comment} from "src/core/ducks/forum/types";
import classNames from "src/utils/classNames";

type TopicSingleMessageProps = {
    messageTitle: string;
    topicId: number;
    authorId: number;
    id: number;
    messageText: string;
    userName: string;
    userAvatar: string;
    currentUser?: string;
    answers: Comment[];
    type: 'comment' | 'replay';
}

const TopicSingleMessage: FC<TopicSingleMessageProps> = (
    {
        messageTitle,
        topicId,
        authorId,
        messageText,
        userAvatar,
        userName,
        id,
        currentUser,
        answers,
        type
    }) => {
    const metaStyle = messageTitle ? styles.userName : styles.messageTitle
    const [showForm, setShowForm] = useState(false)
    const handleReplyClick = () => setShowForm(true)
    const handleHideReply = () => setShowForm(false)
    const [isShowReply, setIsShowReply] = useState(false);

    const handlerToggleReply = ()=>{
        setIsShowReply((prev)=>!prev);
    }


    return (
        <>
            <div className={classNames(styles.messageWrap, {reply: type === 'replay'})}>
                <div className={styles.messageHeader}>
                    <Avatar
                        imageSrc={userAvatar || noImage}
                        imageTitle={userName || 'Avatar'}
                        divClass={styles.forumUserAvatar}
                    />
                    <div className={styles.messageMeta}>
                        <div className={metaStyle}>{userName}</div>
                        <div className={styles.messageTitle}>{messageTitle}</div>
                    </div>
                </div>
                <div className={styles.messageText}>{messageText}</div>
                {type === 'comment' && (<div className={styles.messageButtonWrap}>
                        <Button buttonType={'button'} buttonTitle={'Reply'} buttonName={'reply'} handleClick={handleReplyClick}/>
                        {answers && !!answers.length && (
                            <Button buttonType={'button'} buttonTitle={isShowReply ? 'Скрыть ответы':'Показать ответы'} buttonName={'reply'} handleClick={handlerToggleReply}/>
                        )}
                    </div>
                )}
            </div>
            {showForm ? <AddReplyForm
                topicId={topicId}
                currentUser={currentUser}
                commentId={id}
                authorId={authorId}
                isReply={true}
                hideForm={handleHideReply}
            /> : null}
            {isShowReply && answers && !!answers.length && answers.map((item)=>(
                <TopicSingleMessage
                    key={`${item.parentId}-${item.id}`}
                    messageTitle={item.title}
                    topicId={topicId}
                    authorId={authorId}
                    id={item.id}
                    messageText={item.text}
                    userName={item.author.name}
                    userAvatar={item.author.avatar}
                    answers={item.answers}
                    type={'replay'}
                />
            ))}
        </>
    )
}

export default TopicSingleMessage
