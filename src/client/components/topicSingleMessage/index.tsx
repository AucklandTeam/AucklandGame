import React, { FC, useState } from 'react'
import styles from 'styles/base.scss'
import Avatar from 'components/avatar'
import Button from 'components/buttons'
import noImage from 'static/images/noImage.svg'
import AddReplyForm from 'components/addReplyForm'
import { Comment, Reaction } from 'src/core/ducks/forum/types'
import classNames from 'src/utils/classNames'
import { useAppDispatch } from 'src/ssr'
import { changeReaction } from 'src/core/ducks/forum/actions'
import { RESOURCE_URL } from 'shared/consts'
import {useTranslation} from 'react-i18next';

type TopicSingleMessageProps = {
    messageTitle: string
    topicId: number
    authorId: number
    id: number
    messageText: string
    userName: string
    userAvatar: string
    currentUser?: string
    answers: Comment[]
    type: 'comment' | 'replay'
    reactions: Reaction[]
}

const TopicSingleMessage: FC<TopicSingleMessageProps> = ({
    messageTitle,
    topicId,
    authorId,
    messageText,
    userAvatar,
    userName,
    id,
    currentUser,
    answers,
    type,
    reactions,
}) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const metaStyle = messageTitle ? styles.userName : styles.messageTitle
    const [showForm, setShowForm] = useState(false)
    const handleReplyClick = () => setShowForm(true)
    const handleHideReply = () => setShowForm(false)
    const [isShowReply, setIsShowReply] = useState(false)

    const handlerToggleReply = () => {
        setIsShowReply(prev => !prev)
    }

    const handlerReaction = () => {
        dispatch(changeReaction({ userId: authorId, commentId: id, topicId }))
    }

    return (
        <>
            <div className={classNames(styles.messageWrap, { reply: type === 'replay' })}>
                <div className={styles.messageHeader}>
                    <Avatar
                        imageSrc={userAvatar ? `${RESOURCE_URL}${userAvatar}` : noImage}
                        imageTitle={userName || t('avatar')}
                        divClass={styles.forumUserAvatar}
                    />
                    <div className={styles.messageMeta}>
                        <div className={metaStyle}>{userName}</div>
                        <div className={styles.messageTitle}>{messageTitle}</div>
                    </div>
                </div>
                <div className={styles.messageText}>{messageText}</div>
                {type === 'comment' && (
                    <div className={styles.messageButtonWrap}>
                        <Button
                            buttonType={'button'}
                            buttonTitle={t('reply')}
                            buttonName={'reply'}
                            handleClick={handleReplyClick}
                        />
                        {answers && !!answers.length && (
                            <Button
                                buttonType={'button'}
                                buttonTitle={isShowReply ? t('hideAnswers') : t('showAnswers')}
                                buttonName={'answers'}
                                handleClick={handlerToggleReply}
                            />
                        )}
                        <Button
                            buttonType={'button'}
                            buttonTitle={`${t('like')} ${+reactions?.length}`}
                            buttonName={'like'}
                            handleClick={handlerReaction}
                        />
                    </div>
                )}
            </div>
            {showForm ? (
                <AddReplyForm
                    topicId={topicId}
                    currentUser={currentUser}
                    commentId={id}
                    authorId={authorId}
                    isReply={true}
                    hideForm={handleHideReply}
                />
            ) : null}
            {isShowReply &&
                answers &&
                !!answers.length &&
                answers.map(item => (
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
                        reactions={item.reactions}
                    />
                ))}
        </>
    )
}

export default TopicSingleMessage
