const express = require("express")
const router = express.Router()
const multer = require('multer')
const md5 = require('md5')
const path = require('path')
const home = require('../controllers/home')
const isAuth = require('../middleware/isAuth')

const storageHome = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/home')
    },
    filename: function (req, file, cb){
        cb(null,`${md5(Date.now())}${path.extname(file.originalname)}`)
    }
  })
  
  const uploadHome = multer({ 
      limits: {
          fileSize: 10*1024*1024,
          fileFilter(req,file,cb){
              if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)){
                  return cb(new Error("The uploaded file is not an image"));
              }
              cb(null, true)
          }
      },
    storage: storageHome
})
  
  router.post('/add',isAuth, uploadHome.array('photos'), home.addHome)

router.delete('/:id',isAuth, home.deleteHome)


module.exports = router