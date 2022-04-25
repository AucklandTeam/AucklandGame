// test here: https://www.piesocket.com/websocket-tester
function workerFunction(this: any) {
    const self = this;
    console.log('web-worker init');

    self.onmessage = function (message: any) {
        // сообщение, которое приходит воркеру
        console.log('message for web-worker:', message);


        // можно подключить какой-нибудь апи
        /*
        const someConnection = axios.get('sss').then(res => {
            postMessage({ data: res });
        });
        */
        // сообщение, которое отсылает воркер
        postMessage({data: 'web-worker connect here'});
    };
}

export default workerFunction;
