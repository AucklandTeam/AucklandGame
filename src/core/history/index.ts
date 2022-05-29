import { createBrowserHistory, createMemoryHistory } from 'history'
import { useEffect, useState } from 'react'
import { IS_SERVER } from 'src/core/store'

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
