const express = require("express")
const router = express.Router()
const controller = require('../controllers/link')
const isAuth = require('../middleware/isAuth')
router.post('/add', controller.addLink)



router.delete('/:id',isAuth, controller.deleteLink)

module.exports = router