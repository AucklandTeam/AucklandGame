import Game from 'pages/Game'
import Scores from 'pages/Scores'
import Profile from 'pages/Profile'
import Main from 'pages/Main'
import SignIn from 'pages/Auth/SignIn'
import ForumMain from 'pages/Forum/ForumMain'
import SignUp from 'pages/Auth/SignUp'
import ProfileEdit from 'pages/ProfileEdit'
import Error404 from 'pages/Errors/404'
import { fetchUser } from 'pages/Auth/actions'
import { RouterFetchDataArgs } from 'types/app'

export default [
	{
		path: '/',
		component: Main,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/sign-in',
		component: SignIn,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/sign-up',
		component: SignUp,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/game',
		component: Game,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/profile',
		component: Profile,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/settings',
		component: ProfileEdit,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/scores',
		component: Scores,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/forum',
		component: ForumMain,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '*',
		component: Error404,
		exact: true
	}
]
