const pactum = require('pactum');

it('get connection details', async() => {
    await pactum.spec()
    .get('https://')
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
        .post('https://')
        .withJson(postRequestBody)
        .withHeaders(postRequestHeader)
        .expectStatus();
});