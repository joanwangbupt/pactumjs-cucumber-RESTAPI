const { Given, Then, When, Before } = require('cucumber');
// const pactum = require('pactum');
const {spec, request} = require('pactum');
// const { setJsonLikeAdapter } = require('pactum/src/exports/settings');
const config = require('../../config/uat.json');
const globalEnvs = require('../../globalEnvs');

//  let spec = pactum.spec();

// Before( () => {
//     spec = pactum.spec();
// });

Given('I have a credentials', () => {

});

When ('these are passed into the {string} endpoint & I should receive a Shield Token', (endpoint) => {

});

