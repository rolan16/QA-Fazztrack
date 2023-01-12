const chai = require('chai');
const { expect, assert } = require('chai');
const assertArrays = require('chai-arrays');
const jsonSchema = require('chai-json-schema');
chai.use(assertArrays);
chai.use(jsonSchema);
const apiUser = require('../api/api_user');
const apiData = require('../data/api_user_data');
const scenarios = require('../scenarios/scenarios');
const requestBody = require('../data_json/create-user.json');
const createUserSchema = require('../schemas/create-user-schema.json');

// TC1
describe(scenarios.createUser.description, async () => {

    it(scenarios.createUser.testCases.case1, async () => {
        // Create User
        let body = {}
        Object.assign(body, requestBody);
        
        const response = apiUser.postUserCreate(body);
        
        console.log(body);
        console.log((await response).status);
        
    });

});

// TC2
describe(scenarios.getUserByName.description, async () => {

    it(scenarios.getUserByName.testCases.case1, async () => {
        // memanggil data by Name
        let body = {}
        Object.assign(body, requestBody);
        
        const response = apiUser.getUserByName('David');
        
        console.log(response.body);
        console.log((await response).status);
        
    });

});

describe(scenarios.updateUser.description, async () => {

    // TC3
    it(scenarios.updateUser.positiveCase.case1, async () => {
        // mengupdate data Occupation dan Nationality (Positive Case)
        let body = {}
        Object.assign(body, requestBody);
       
        body.occupation = "Guru";
        body.nationality = "Indonesia";

        const response = await apiUser.putUserUpdate(body); 
        console.log(response.body);

        expect(response.status).to.equal(200);
        // assert.equal(response.status, 200, 'OK');
        expect(response.body.occupation).to.be.containing("Guru");
        expect(response.body.nationality).to.be.containing("Indonesia");

        expect(response.body).to.have.jsonSchema(createUserSchema);
    });

    // TC4
    it(scenarios.updateUser.negativeCase.case1, async () => {
        /* User gagal mengupdate data ketika age bernilai 0, 
        ketika data hobbies merupakan empty array, dan ketika data id null (Negative Case) */
        let body = {}
        Object.assign(body, requestBody);
        
        body.age = 0;
        body.hobbies = [];
        body.id = null; 

        const response = await apiUser.putUserUpdate(body); 
        console.log(response.body);

        expect(response.status).to.equal(400);
        expect(response.body.message).to.include('you must specify');
        expect(response.body.errorCode).to.include('ER-03');
    });

});

describe(scenarios.getUserByID.description, async () => {

    // TC5
    it(scenarios.getUserByID.positiveCase.case1, async () => {
        // memanggil data by ID (Positive Case)
        
        const response = apiUser.getUserById('511a20c3-d56c-4fb8-a127-aea8947ea4a7');
        
        console.log(response.body);
        console.log((await response).status);
        
        expect(response.status).to.equal(200);
        // expect(response.body.id).to.be.contains(String);
    });

    // TC6
    it(scenarios.getUserByID.negativeCase.case1, async () => {
        // memanggil data by ID (Negative Case)
        
        const response = apiUser.getUserById("32");
        
        console.log(response.body);
        console.log((await response).status);
        
        expect(response.status).to.equal(400);
        // expect(response.body.message).to.include('user not found');
        // expect(response.body.errorCode).to.include('ER-01');
    });

});