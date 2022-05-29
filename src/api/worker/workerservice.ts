import workerFunction from './worker'

// initialization with webworker
const initWorkerApi = (callback: any) => {
	const dataObj = `(${workerFunction})();`
	const blob = new Blob([dataObj.replace('"use strict";', '')])
	// @ts-ignore
	const blobURL = (window.URL || window.webkitURL).createObjectURL(blob, {
		type: 'application/javascript; charset=utf-8'
	})

	const myWorker = new Worker(blobURL)

	const message = 'message to web-worker'
	// отправляем сообщение воркеру
	myWorker.postMessage(message)
	// обработка сообщений от воркера
	myWorker.onmessage = ({ data }) => {
		console.log('message from web-worker:', data)

		if (data) {
			callback(data)
		}
	}
}

export default initWorkerApi
