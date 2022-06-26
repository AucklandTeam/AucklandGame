import { createBrowserHistory, createMemoryHistory } from 'history'
import { IS_SERVER } from 'src/core/store'

const history = IS_SERVER
	? createMemoryHistory({ initialEntries: ['/'] })
	: createBrowserHistory()

export default history
