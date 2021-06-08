const express = require("express")
const router = express.Router()
const {signIn, galareyAdd} = require('../controllers/adminController')
const isAuth = require('../middleware/isAuth')
const playLists = require('../controllers/playList')
const galarey = require('../controllers/galarey')
const link = require('../controllers/link')
const home = require('../controllers/home')

router.get('/',isAuth,playLists.add)

router.get('/login',isAuth,signIn)

router.get('/allPlaylist', isAuth,playLists.playList)

router.get('/addLink',isAuth,link.add )

router.get('/allLink',isAuth, link.link)

router.get('/AddGalarey',isAuth,galareyAdd)

router.get('/allGalarey',isAuth, galarey.galarey)

router.get('/addHome',isAuth,home.add)

router.get('/allHome',isAuth, home.homePage)

router.get('/:id',isAuth, playLists.edit)

module.exports = router