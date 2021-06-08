const express = require("express")
const router = express.Router()
const multer = require('multer')
const md5 = require('md5')
const path = require('path')
const playList = require('../controllers/playList')
const isAuth = require('../middleware/isAuth')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(file.fieldname === 'music'){
          cb(null, "public/uploads/music");
        } 
        else{
          cb(null, "public/uploads/image");
        }
    },
    filename: function (req, file, cb) {
        if(file.fieldname === 'music'){
          cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
        }
        else{
          cb(null,`${md5(Date.now())}${path.extname(file.originalname)}`);
        }
    },
  });
  
  var upload = multer({

    limits: {
      fileSize: 200*1024*1024,
      fileFilter(req,file,cb){
        if(file.fieldname === 'music'){
           if(!file.originalname.match(/\.(mp3|mp4)$/)){
              return cb(new Error("The uploaded file is not a music"));
          }
          cb(null, true)
        }else{
          if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)){
            return cb(new Error("The uploaded file is not an image"));
        }
        cb(null, true)
        }
         
      }
  },
    storage: storage
  
  });
  
  var uploadMultiple = upload.fields([{ name: 'music', maxCount: 10 }, { name: 'image', maxCount: 10 }])

router.post('/add', isAuth,uploadMultiple,playList.addPlayList)

router.get('/:id',isAuth, playList.edit)

router.put('/:id', isAuth,uploadMultiple, playList.updatePlayList)

router.delete('/:id', isAuth, playList.deletePlayList)


module.exports = router