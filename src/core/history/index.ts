import { createBrowserHistory, createMemoryHistory } from 'history'
import { useEffect, useState } from 'react'

export const IS_SERVER = !(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
)

const history = IS_SERVER
	? createMemoryHistory({ initialEntries: ['/'] })
	: createBrowserHistory()

export const useInitHistory = () => {
	const [stateHistory, setState] = useState({
		action: history.action,
		location: history.location
	})

	useEffect(() => history.listen(setState), [history])
	return {
		stateHistory
	}
}

export default history
