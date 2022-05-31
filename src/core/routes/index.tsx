import Game from 'pages/Game'
import Scores from 'pages/Scores'
import Profile from 'pages/Profile'
import Main from 'pages/Main'
import SignIn from 'pages/Auth/SignIn'
import ForumMain from 'pages/Forum/ForumMain'
import SignUp from 'pages/Auth/SignUp'
import ProfileEdit from 'pages/ProfileEdit'
import Error404 from 'pages/Errors/404'
import { fetchUser } from 'src/core/ducks/auth/actions'
import { RouterFetchDataArgs } from 'types/app'

export default [
	{
		path: '/',
		element: <Main />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/sign-in',
		element: <SignIn />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/sign-up',
		element: <SignUp />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/game',
		element: <Game />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/profile',
		element: <Profile />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/settings',
		element: <ProfileEdit />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/scores',
		element: <Scores />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '/forum',
		element: <ForumMain />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: '*',
		element: <Error404 />,
		exact: true
	}
]
