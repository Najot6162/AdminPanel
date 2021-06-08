const express = require("express")
const router = express.Router()
const isAuth = require('../middleware/isAuth')
const auth = require('../controllers/auth')

router.post('/regis', auth.register)

router.post('/login', auth.login)

router.get('/users',auth.user)

router.get('/signIn',auth.signIn)

// router.get('/', isAuth, add)

router.get('/logout', auth.logout)

module.exports = router