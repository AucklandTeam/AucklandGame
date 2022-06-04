import React, { FC, MutableRefObject, useRef } from 'react'
import styles from 'styles/base.scss'
import NotGameWrap from 'components/notGameWrap'
import Avatar from 'components/avatar'
import Modal from 'components/modal'
import UploadAvatar from 'components/avatarUploadForm'
import EditUserData from 'components/editUserForm'
import EditUserPassword from 'components/editUserPasswordForm'
import { RESOURCE_URL } from 'shared/consts'
import { useUserInfo } from 'src/core/ducks/auth/selectors'
import noImage from 'static/images/noImage.svg'

const ProfileEdit: FC = () => {
	const modal: MutableRefObject<null> = useRef(null)
	const { data } = useUserInfo()
	console.log(data)
	return (
		<NotGameWrap titlePage={'Profile Edit'}>
			<div className={styles.userCard}>
				<Avatar
					imageSrc={
						data?.avatar ? `${RESOURCE_URL}${data.avatar}` : noImage
					}
					imageTitle={data?.avatar ? data.login : 'Avatar'}
					divClass={styles.userAvatar}
					handleClick={() =>
						(modal as MutableRefObject<any>).current.open()
					}
				/>
				<div className={styles.userData}>
					<EditUserData />
					<EditUserPassword />
				</div>
			</div>
			<Modal ref={modal}>
				<UploadAvatar />
			</Modal>
		</NotGameWrap>
	)
}

export default ProfileEdit
