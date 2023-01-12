const chai = require('chai');
const { expect, assert } = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const apiUser = require('../api/api_user');
const apiData = require('../data/api_user_data');
const scenarios = require('../scenarios/scenarios');
const requestBody = require('../data_json/create-user.json');


describe(scenarios.createUser.description, async () => {

    // it(scenarios.createUser.testCases.case1, async () => {
    //     // your scripting code start
    //     const dataCreateUser =  apiData.userData('Andri', 'Gamers');
    //     const response = await apiUser.postUserCreate(dataCreateUser);

    //     const { firstName, hobbies } = dataCreateUser;

    //     // console.log(response.body.data[0].hobbies);

    //     expect(response.status).to.equal(200);
    //     expect(response.body.firstName).to.equal(firstName);
        
    //     expect(response.body.hobbies).to.be.array();
    //     expect(response.body.hobbies).to.be.equalTo(hobbies);

    //     expect(response.body.hobbies).to.be.containingAllOf([ "Manga", "Selling", "Sales" ]);
    //     expect(response.body.hobbies).to.be.containing('tawuran');
        
    // });

    it(scenarios.createUser.testCases.case1, async () => {
        // your scripting code start
        const dataCreateUser =  apiData.userData;
        const response = await apiUser.putUserUpdate(dataCreateUser());

        const { firstName, hobbies, lastName } = dataCreateUser;
        // expect(response.status).to.equal(200);
        
        console.log(response.body);
        // expect(response.body.firstName).to.equal(firstName);
        // expect(response.body.lastName).to.equal(lastName);
        // expect(response.body.age).to.not.contain(String);
        
    });

    it(scenarios.createUser.testCases.case2, async () => {
        let body = {}
        Object.assign(body, requestBody)
        body.id = '0887cc80-13ab-4468-9d1d-216f7820e150';
        body.occupation = 'pelajar';
        body.hobbies = [];
    
        const response = await apiUser.putUserUpdate(body)
        console.log(response.body)
        // expect(response.status).to.equal(400)
        // assert.equal(response.status, 400, 'Status code is wrong')
        // expect(response.status).equal(400)
        // expect(response.body.message).to.include('you must specify')
    });

    it(scenarios.updateUser.positiveCase.case1, async () => {
        const dataUpdate =  apiData.userData('Guru', 'Singapore');
        const response = await apiUser.putUserCreate(dataUpdate);
        
        console.log(response.body) 
        // expect(response.status).to.equal(200)
        // assert.equal(response.status, 200, 'OK')
    })


    // before(async() => {
    //     console.log('before')
    // })

    // after(async() => {
    //     console.log('after')
    // })

    // beforeEach(async() => {
    //     console.log('before each')
    // })

    // afterEach(async() => {
    //     console.log('after each')
    // })
});

