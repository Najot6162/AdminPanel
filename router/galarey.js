const express = require("express")
const router = express.Router()
const multer = require('multer')
const md5 = require('md5')
const path = require('path')
const galarey = require('../controllers/galarey')
const isAuth = require('../middleware/isAuth')

const storageGalarey = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/galarey')
    },
    filename: function (req, file, cb){
        cb(null,`${md5(Date.now())}${path.extname(file.originalname)}`)
    }
  })
  
  const uploadGalarey = multer({ 
      limits: {
          fileSize: 10*1024*1024,
          fileFilter(req,file,cb){
              if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)){
                  return cb(new Error("The uploaded file is not an image"));
              }
              cb(null, true)
          }
      },
    storage: storageGalarey
})
  
  router.post('/add',isAuth, uploadGalarey.array('photos'), galarey.addGalarey)



  router.put('/:id',isAuth,  uploadGalarey.array('photos'), galarey.updateGalary)

 router.delete('/:id',isAuth, galarey.deleteGalarey)

 module.exports = router

