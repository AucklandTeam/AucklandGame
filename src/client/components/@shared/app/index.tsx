import { Suspense, useEffect } from 'react'
//import loadable from '@loadable/component'
import { Routes, Route } from 'react-router-dom'
import { Loader } from 'shared/loader'
import Game from 'pages/Game'
import Scores from 'pages/Scores'
import Profile from 'pages/Profile'
import Main from 'pages/Main'
import SignIn from 'pages/Auth/SignIn'
import ForumMain from 'pages/Forum/ForumMain'
import SignUp from 'pages/Auth/SignUp'
import ProfileEdit from 'pages/ProfileEdit'
import Error404 from 'pages/Errors/404'

import { useDispatch } from 'react-redux'
import { fetchUser } from 'src/core/ducks/auth/actions'
/*const MainPage = loadable(() => import('pages/Main'))
const SighInPage = loadable(() => import('pages/Auth/SignIn'))
const SighUpPage = loadable(() => import('pages/Auth/SignUp'))
const ProfilePage = loadable(() => import('pages/Profile'))
const ScoresPage = loadable(() => import('pages/Scores'))
const ForumPage = loadable(() => import('pages/Forum/ForumMain'))
const Error404 = loadable(() => import('pages/Errors/404'))*/

export const App = () => {
	//const dispatch = useAppDispatch()
	useEffect(() => {
		//dispatch(fetchUser())
	})

	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route index element={<Main />} />
				<Route path='/game' element={<Game />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/settings' element={<ProfileEdit />} />
				<Route path='/scores' element={<Scores />} />
				<Route path='/forum' element={<ForumMain />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</Suspense>
	)
}
