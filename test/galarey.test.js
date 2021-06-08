const { expect } = require('chai');
const request = require('supertest')
const galarey = require('..//models/galareyModels')
const app = require('../app'); 

const image = './115874201.jpg'

describe('Galarey', () => {    

    test(' Add File  ', async () => {
    await request(app).post('/galarey/add')
   
})

    test('Galarey all date', async () => {
    await request(app).get('/galarey/all')
})
})










