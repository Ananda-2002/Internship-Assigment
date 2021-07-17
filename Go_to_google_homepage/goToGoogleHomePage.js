// This is not a 100% accurate solution, there may be some bug on this code. 
const request = require('request')

function getGoogleHomePage(finalCallBack) {
    request('https://www.google.com/', function (error, response, body) {
        console.log('error', error);
        finalCallBack(error);

        console.log('status code', response && response.statusCode);
        console.log('body', body);
        finalCallBack(null, body);
    });
};

let promise = new Promise(getGoogleHomePage);

promise.then(
    getGoogleHomePage = (result) => { console.log(result); },
    function (error) { console.log(error); }
)