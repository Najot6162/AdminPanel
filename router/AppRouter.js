const express = require("express")
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/allPlaylist',adminController.playlist )
router.get('/allGalarey',adminController.galarey )
router.get('/allHomePage',adminController.homePage )
router.get('/allLink',adminController.link )


module.exports = router