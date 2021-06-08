const Home = require('../models/homeModels')
const path = require('path')
const fs = require('fs')

exports.add = (req,res) => {
    res.render('./Admin/home/add', {layout: "./adminLayout", title: "HomePage"})
  }

exports.homePage = async (req, res) => {
try {
  const user =  req.session.user
   const home = await Home.find().sort({date: -1})
    res.render('./Admin/home/all', {layout: "./adminLayout", title: "HomePage", home, user})
    // res.status(200).json({message: "Playlist", data: playlists})
} catch (error) {
   res.status(404).json({message: "Xatolik mavjud", data: error})
}
}

exports.addHome = async (req, res) => {

    let files = req.files
    console.log(files)
   
    let photo = []
    for (let file of files) {
      const { filename } = file
      photo.push(filename)
    }
  
         const home = new Home({
          file : photo,
          text : req.body.text 
      })
        // console.log(req.name)
         await home.save()
      .then(()=>{
        // res.status(201).json({ message: "HomePage yaratildi", data: home})
          res.redirect('/allHome')
         
      })
      .catch((error) => {
          res.status(400).json({ message : "Xatolik mavjud", error: error})
      })
  }

  exports.deleteHome = async (req, res) => {
  
    await Home.findByIdAndDelete({ _id: req.params.id })
    .exec(async(error,data) => {
        if(error) {
            res.send(error)
        }
        else {
          console.log(req.params.id)
          const files = data.file
          console.log(data.file)
          for (let file of files) {
            const filePath = path.join(path.dirname(__dirname) + `/public/uploads/home`, file)
            fs.unlink(filePath, async (error) => {
                if(error) {
                    console.log(error)
                }
            })
          }
        
                    await Home.findByIdAndDelete(req.params.id)
                    res.redirect('/allHome')
            //         res.status(200).json(
            //             {message: "Fayl O'chirildi", 
            //             data: []
            // })
        }
    })
  }


  exports.models