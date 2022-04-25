self.addEventListener('install', async event => {
    console.log('install');

});

self.addEventListener('activate', e => {
    console.log('activate');
});