import React from 'react'
import styles from 'styles/base.scss'
import NotGameWrap from 'components/notGameWrap'
import Avatar from 'components/avatar'
import { useUserInfo } from 'pages/Auth/selectors'
import { RESOURCE_URL } from 'shared/consts'
import noImage from '../../../../static/images/noImage.svg'

const Profile = () => {
	const { data } = useUserInfo()

	return (
		<NotGameWrap titlePage={'Gamer Profile'}>
			<div className={styles.userCard}>
				<Avatar
					imageSrc={
						data?.avatar ? `${RESOURCE_URL}${data.avatar}` : noImage
					}
					imageTitle={data?.login || 'Avatar'}
					divClass={styles.userAvatar}
				/>
				<div className={styles.userData}>
					<h4>{data?.login || 'N/A'}</h4>
					<div>E-mail: {data?.email || 'N/A'}</div>
					<h4>Score: {'5345256'}</h4>
				</div>
			</div>
		</NotGameWrap>
	)
}

export default Profile
