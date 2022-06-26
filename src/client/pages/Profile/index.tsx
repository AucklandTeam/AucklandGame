import React from 'react'
import styles from 'styles/base.scss'
import NotGameWrap from 'components/notGameWrap'
import Avatar from 'components/avatar'
import { useUserInfo } from 'src/core/ducks/auth/selectors'
import { RESOURCE_URL } from 'shared/consts'
import noImage from 'static/images/noImage.svg'
import { useLeaderBordInfo } from 'src/core/ducks/scores/selectors'
import { PageMeta } from 'components/pageMeta'
import { useTranslation } from 'react-i18next'

const Profile = () => {
	const { data: list } = useLeaderBordInfo()
	const { data } = useUserInfo()
	const { t } = useTranslation()

	const userScore = list?.find(x => x.login === data?.login)

	return (
		<NotGameWrap titlePage={t('gamerProfile')}>
			<PageMeta
				title={`${t('gamerProfile')} | ${t('gameTitle')}`}
				description={t('gameDescription')}
			/>
			<div className={styles.userCard}>
				<Avatar
					imageSrc={
						data?.avatar ? `${RESOURCE_URL}${data.avatar}` : noImage
					}
					imageTitle={data?.login || 'Avatar'}
					divClass={styles.userAvatar}
				/>
				<div className={styles.userData}>
					<h5>
						{t('gamerName')}: {data?.login || 'N/A'}
					</h5>
					<h5>E-mail: {data?.email || 'N/A'}</h5>
					<h5>
						{t('score')}:&nbsp;
						<span className={styles.accentedColor}>
							{userScore?.aucklandScope}
						</span>
					</h5>
				</div>
			</div>
		</NotGameWrap>
	)
}

export default Profile
