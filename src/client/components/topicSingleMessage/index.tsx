import React, { FC, FormEvent, useState } from 'react'
import styles from 'styles/base.scss'
import Avatar from 'components/avatar';
import Button from 'components/buttons';
import noImage from 'static/images/noImage.svg';

const TopicSingleMessage: FC = () => {
    //const dispatch = useAppDispatch()
    const userName = 'var_user.login'
    const userAvatar = 'var_user.avatar'
    const messageText = 'var_message.text'
    const messageTitle = 'var_message.title'

    return (
        <>
            <div className={styles.messageHeader}>
                <Avatar
                    imageSrc={noImage}
                    imageTitle={userName || 'Avatar'}
                    divClass={styles.userAvatar}
                />
                <div className={styles.userName}>
                    {userName}
                </div>
                <div className={styles.messageTitle}>
                    {messageTitle}
                </div>
            </div>
            <div className={styles.messageText}>
                {messageText}
            </div>
            <Button buttonType={'button'} buttonTitle={'Reply'}>Reply</Button>
        </>
    )
}

export default TopicSingleMessage
