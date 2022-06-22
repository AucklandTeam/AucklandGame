import HomePageWrap from 'components/homePageWrap'
import {Link, useLocation} from 'react-router-dom';
import React, { useEffect } from 'react'
import { RouterPath } from 'src/client/components/@shared/consts'
import {
	authYandexGetServiceID,
	authYandexLogin
} from 'src/core/ducks/auth/actions'
import yandex from 'static/images/yandex.svg'
import { useAppDispatch } from 'src/ssr'
import { PageMeta } from 'components/pageMeta'
import {useTranslation} from 'react-i18next';

const AuthViaYandex = () => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const param = new URLSearchParams(location.search)
	useEffect(() => {
		const code = param.get('code')
		if (code) {
			dispatch(
				authYandexLogin({
					code,
					redirect_uri: `https://${window.location.host}${RouterPath.SignYandex}`
				})
			)
		}
	}, [param])

	const {t} = useTranslation()

	return (
		<HomePageWrap titleContent={t('signYandexTitle')}>
			<PageMeta
				title={`${t('signYandexTitle')} | ${t('gameTitle')}`}
				description={t('gameDescription')}
			/>
			<div onClick={() => dispatch(authYandexGetServiceID())}>
				<img src={yandex} alt='' />
			</div>
			<Link style={{ width: '100%', textAlign: 'center' }} to={RouterPath.SignIn}>{t('signWithPassword')}</Link>
		</HomePageWrap>
	)
}

export default AuthViaYandex
