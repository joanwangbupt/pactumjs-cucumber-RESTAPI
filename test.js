const pactum = require('pactum');

it('get connection details', async() => {
    await pactum.spec()
    .get('https://workflow-service-console.test.consoleconnect.com/connections/651baec44f8e3aa22f32b54f')
    .expectStatus(200);
});

it('modify the contract time of IoD service', async() => {
    const postRequestBody = {
        "created_at": "2022-11-02T03:48:27.200Z",
        "endDate": "2023-07-02T03:48:20.807Z",
        "activeAt": "2022-11-02T03:48:20.807Z"
    };

    const postRequestHeader = {
        "shield-token": "3d30c63fc5f0ff170a01cd97196b9461213e38ed087785dbd48f2d0bef41dc67"
    };

    await pactum.spec()
        .post('https://shield-api.stage.consoleconnect.com/v2/admin/gia-billing/97872c5e-fd9d-464e-ae41-ccef93bbbe8c')
        .withJson(postRequestBody)
        .withHeaders(postRequestHeader)
        .expectStatus();
});