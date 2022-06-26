import Main from 'pages/Main'
import SignIn from 'pages/Auth/SignIn'
import { fetchUser } from 'src/core/ducks/auth/actions'
import { RouterFetchDataArgs } from 'types/app'
import { RouterPath } from 'shared/consts'
import SignUp from 'pages/Auth/SignUp'
import Game from 'pages/Game'
import Profile from 'pages/Profile'
import ProfileEdit from 'pages/ProfileEdit'
import Scores from 'pages/Scores'
import { getLeaderBoard } from 'src/core/ducks/scores/actions'
import ForumMain from 'pages/Forum/ForumMain'
import AuthViaYandex from 'pages/Auth/AuthViaYandex'
import Error404 from 'pages/Errors/404'
import ForumTopicsList from 'pages/Forum/ForumTopicsList'
import { getCategoryTopicsAction } from 'src/core/ducks/forum/actions'
import ForumSingleTopic from 'pages/Forum/ForumSingleTopic'

export default [
	{
		path: RouterPath.Main,
		element: <Main />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: RouterPath.SignIn,
		element: <SignIn />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: RouterPath.SignUp,
		element: <SignUp />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: RouterPath.Game,
		element: <Game />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: RouterPath.Profile,
		element: <Profile />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: RouterPath.Settings,
		element: <ProfileEdit />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: RouterPath.Scores,
		element: <Scores />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
			dispatch(getLeaderBoard())
		}
	},
	{
		path: RouterPath.Forum,
		element: <ForumMain />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
			dispatch(getCategoryTopicsAction())
		}
	},
	{
		path: `${RouterPath.TopicsList}/:id`,
		element: <ForumTopicsList />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: `${RouterPath.SingleTopic}/:id`,
		element: <ForumSingleTopic />,
		exact: true,
		fetchData({ dispatch }: RouterFetchDataArgs) {
			dispatch(fetchUser())
		}
	},
	{
		path: RouterPath.SignYandex,
		element: <AuthViaYandex />,
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
