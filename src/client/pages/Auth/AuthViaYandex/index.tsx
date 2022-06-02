import HomePageWrap from 'components/homePageWrap'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { RouterPath } from 'src/client/components/@shared/consts'
import {
	authYandexGetServiceID,
	authYandexLogin
} from 'src/core/ducks/auth/actions'
import yandex from 'src/../static/images/yandex.svg'
import { useDispatch } from 'react-redux'

const AuthViaYandex = () => {
	const dispatch = useDispatch()
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
	return (
		<HomePageWrap titleContent={'Sign via Yandex'}>
			<div onClick={() => dispatch(authYandexGetServiceID())}>
				<img src={yandex} alt='' />
			</div>
		</HomePageWrap>
	)
}

export default AuthViaYandex
