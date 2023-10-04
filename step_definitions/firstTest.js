const pactum = require('pactum');
const { Given, Then } = require('cucumber');
const request = pactum.request;
request.setDefaultTimeout(20000);
request.setBaseUrl('http://qa-practice.herokuapp.com')

Given('I make a GET request to {string}', async function (url) {
  this.response = await request.get(url);
});

Then('the response status code should be {int}', function (statusCode) {
  expect(this.response.statusCode).to.eql(statusCode);
});

Then('the response body should contain {string}', function (text) {
  expect(this.response.body).to.include(text);
});
