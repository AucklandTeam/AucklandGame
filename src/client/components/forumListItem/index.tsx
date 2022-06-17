import React, {FC, MutableRefObject, useRef} from 'react';
import styles from 'styles/base.scss'
import { forumListProps } from './types'
import Button from 'components/buttons'
import AddNewTopicForm from 'components/addNewTopicForm';
import Modal from 'components/modal';
import {RouterPath} from 'shared/consts';
import {Link} from 'react-router-dom';

const ForumListItem: FC<forumListProps> =
	({
		forumTitle,
		forumTopicsCount,
		forumCommentsCount
	}) => {
		const modal: MutableRefObject<null> = useRef(null)
return (
	<tr>
		<td className={styles.forumTitle}><Link to={RouterPath.TopicsList} title={forumTitle}>{forumTitle}</Link></td>
		<td className={styles.forumTopicsCounter}>
			{forumTopicsCount}
			<Button buttonType={'button'} buttonTitle={'+'} handleClick={() =>
				(modal as MutableRefObject<any>).current.open()
			}/>
		</td>
		<td className={styles.forumCommentsCounter}>{forumCommentsCount}</td>
		<Modal ref={modal}>
			<AddNewTopicForm/>
		</Modal>
	</tr>
)
}

export default ForumListItem
