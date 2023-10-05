const pactum = require('pactum');
const { Given, Then, Before } = require('cucumber');

let spec = pactum.spec();

// const request = pactum.request;
// request.setDefaultTimeout(20000);
// request.setBaseUrl('http://qa-practice.herokuapp.com')

Before(() => {
  spec = pactum.spec();
});

Given('I make a GET request to {string}', async function (url) {
  
});

Then('the response status code should be {int}', function (statusCode) {

});

Then('the response body should contain {string}', function (text) {

});
