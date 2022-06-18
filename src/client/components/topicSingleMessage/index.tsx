import React, {
	FC,
	useState
} from 'react';
import styles from 'styles/base.scss'
import Avatar from 'components/avatar'
import Button from 'components/buttons'
import noImage from 'static/images/noImage.svg'
import AddReplyForm from 'components/addReplyForm';

const TopicSingleMessage: FC = () => {
	//const dispatch = useAppDispatch()
	const userName = 'var_user.login'
	const userAvatar = 'var_user.avatar'
	const messageText = 'var_message.text'
	const messageTitle = 'var_message.title'
	const messageDate = 'var_01.01.2022'
	const metaStyle = messageTitle ? styles.userName : styles.messageTitle
	const [showForm, setShowForm] = useState(false)
	const handleReplyClick = () => setShowForm(true)


	return (
		<>
			<div className={styles.messageWrap}>
				<div className={styles.messageHeader}>
					<Avatar
						imageSrc={noImage}
						imageTitle={userName || 'Avatar'}
						divClass={styles.forumUserAvatar}
					/>
					<div className={styles.messageMeta}>
					<div className={metaStyle}>{userName}</div>
					<div className={styles.messageTitle}>{messageTitle}</div>
					<div className={styles.messageDate}>{messageDate}</div>
				</div>
				</div>
				<div className={styles.messageText}>{messageText}</div>
                <Button buttonType={'button'} buttonTitle={'Reply'} buttonName={'reply'} handleClick={handleReplyClick}>
                    Reply
                </Button>
			</div>
	{ showForm ? <AddReplyForm/> : null }
	</>
	)
}

export default TopicSingleMessage
