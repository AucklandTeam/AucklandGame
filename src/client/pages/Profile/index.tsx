import React from 'react';
import styles from 'styles/base.scss'
import NotGameWrap from 'components/notGameWrap'
import Avatar from 'components/avatar'
import { useUserInfo } from 'src/core/ducks/auth/selectors'
import { RESOURCE_URL } from 'shared/consts'
import noImage from 'static/images/noImage.svg'
import {useLeaderBordInfo} from 'src/core/ducks/scores/selectors'

const Profile = () => {
	const { data:list } = useLeaderBordInfo()
	const { data } = useUserInfo()
	const userScore = list.filter(x => x.login === data.login)

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
					<h4>Score: {userScore[0].aucklandScope}</h4>
				</div>
			</div>
		</NotGameWrap>
	)
}

export default Profile
