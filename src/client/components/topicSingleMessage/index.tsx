import React, {
	FC,
	useState
} from 'react';
import styles from 'styles/base.scss'
import Avatar from 'components/avatar'
import Button from 'components/buttons'
import noImage from 'static/images/noImage.svg'
import AddReplyForm from 'components/addReplyForm';

type TopicSingleMessageProps = {
	messageTitle: string;
	topicId: number;
	authorId: number;
	messageText: string;
	userName: string;
	userAvatar: string;
}

const TopicSingleMessage: FC<TopicSingleMessageProps> = ({messageTitle, topicId, authorId, messageText, userAvatar, userName}) => {
	//const dispatch = useAppDispatch()
	const metaStyle = messageTitle ? styles.userName : styles.messageTitle
	const [showForm, setShowForm] = useState(false)
	const handleReplyClick = () => setShowForm(true)


	return (
		<>
			<div className={styles.messageWrap}>
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
                <Button buttonType={'button'} buttonTitle={'Reply'} buttonName={'reply'} handleClick={handleReplyClick}>
                    Reply
                </Button>
			</div>
	{ showForm ? <AddReplyForm  topicId={topicId} authorId={authorId} isReply={true}/> : null }
	</>
	)
}

export default TopicSingleMessage
