import {InitStateInterface} from '@issr/core/dist/iSSR';

type Collection<K extends string | number, V> = Record<K, V>

declare global {
	interface Window { SSR_DATA: any; }
}

interface Window {
	IS_SERVER: boolean
	IS_DEV: boolean
	SSR_DATA: InitStateInterface
}

declare namespace Express {
	interface Response {
		renderApp(): void
	}
}
