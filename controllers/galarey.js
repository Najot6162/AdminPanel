const Galarey = require('../models/galareyModels')
const path = require('path')
const fs = require('fs')
const PlayList = require('../models/playListModel')
const userModel = require('../models/userModel')

exports.addGalarey = async (req, res) => {
  // console.log(req.files)
  let files = req.files
  console.log(files)
 
  let photo = []
  for (let file of files) {
    const { filename } = file
    photo.push(filename)
  }
  // console.log(photo)
  
  const file = new Galarey({
      file: photo
  })
  // console.log(req.file)
  await file.save()
  .then(() => {
    res.redirect('/AddGalarey')
    // res.render('./Admin/galarey/add', {layout: "./adminLayout", title: "Galarey"})
      //  res.status(201).json({ message: "Rasm yuklandi ", data: file})
        // console.log(file)
  })
  .catch((error) => {
    console.log(error)
      res.status(400).json({message: `xatolik mavjud`, error : error })
  })  
}

exports.galarey = async (req, res) => {
  try {
    const user =  req.session.user
    const galarey = await Galarey.find().sort({ date: -1 })
    res.render('./Admin/galarey/all', {layout: "./adminLayout", title: "Palylists", galarey, user })
  
  } catch (error) {
        res.status(404).json({message: "Xatolik mavjud", data: error})
  } 
  }



exports.updateGalary  =async (req, res, next) => {

    await Galarey.findById(req.params.id).exec((error, data) => {
      if(error) {
        throw error
      } else {
        // console.log(req.params.id)
        const files = data.file
        // console.log(data.file)
        for (let file of files) {
          const filePath = path.join(path.dirname(__dirname) + `/public/uploads/galarey`, file)
          fs.unlink(filePath, async (error) => {
              if(error) {
                  console.log(error)
              }
          })
        }
      }
    })
  
      let files = req.files
      // console.log(files)
    
      let photo = []
      for (let file of files) {
        const { filename } = file
        photo.push(filename)
      }
   
      const image2 = await Galarey.findByIdAndUpdate(req.params.id)
      console.log(image2)
    
         image2.file = photo
  
      await image2.save()
      .then(() => {
        res.status(200).json({ message: "Rasm o'zgartirildi", data: image2 })
      })
      .catch((error) => {
        res.status(400).json({ message: "Xatolik mavjud", error: error})
      })
         
      }
  
exports.deleteGalarey = async (req, res) => {
  
    await Galarey.findByIdAndDelete({ _id: req.params.id })
    .exec(async(error,data) => {
        if(error) {
            res.send(error)
        }
        else {
          console.log(req.params.id)
          const files = data.file
          console.log(data.file)
          for (let file of files) {
            const filePath = path.join(path.dirname(__dirname) + `/public/uploads/galarey`, file)
            fs.unlink(filePath, async (error) => {
                if(error) {
                    console.log(error)
                }
            })
          }
        
                    await Galarey.findByIdAndDelete(req.params.id)
                    res.redirect('/allGalarey')
            //         res.status(200).json(
            //             {message: "Fayl O'chirildi", 
            //             data: []
            // })
        }
    })
  }

  
exports.models