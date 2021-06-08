// const { expect } = require('chai');
const request = require('supertest')
const User = require('../models/userModel')
const app = require('../app'); 
const { expect } = require('chai');

// const user = {
//     username: "test123",
//     email:" test123@gmail.com",
//     password: " test123"
// }

// beforeEach(async () => {
//     await User.deleteMany({})
//     await User(user).save()
// })

describe(' Auth ', () => {

    test('Should sign up for a user' , async () => {
        const res = await request(app).post('/regis')
        .send({
            username : "tessttt1",
            email: "testtt1@gmail.com",
            password: "tstttt2321"
        }, (_, res) => {
            expect(res.status).toBe(201)
     
        })
        expect(201)

    })

   test('Should login for a user', async () => {
  const res =  await request(app).post('/login')

    .send({
        username: "tessttt112",
        password: "tstttt232112"
    })
    // expect(res.status).toBe(200)

})

  test('Should get allDate', async () => {
   const res = await request(app).get('/')
  
})

})
