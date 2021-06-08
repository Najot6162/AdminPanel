const PlayList = require('../models/playListModel')
const path = require('path')
const fs = require('fs')

exports.add = (req,res) => {
  res.render('./Admin/playlist/add', {layout: "./adminLayout", title: "Playlist"})
}

exports.edit = async (req, res) => {
  const playList = await PlayList.findById({ _id: req.params.id })
  res.render('./Admin/playlist/edit', { title: 'Admin', layout: './adminLayout', playList})
  
}

exports.addPlayList = async (req, res) => {
    // console.log(req.files)
    let musicFiles = req.files.music
    // console.log(musicFiles)
    let musicFile = []
    for (let file of musicFiles) {
      const { filename } = file
      musicFile.push(filename)
    }
  
    let imageFiles = req.files.image
    let imageFile = []
    for (let file of imageFiles) {
      const { filename } = file
      imageFile.push(filename)
    }
  
         const music = new PlayList({
          name: req.body.name,
          author: req.body.author,
          music : musicFile,
          image : imageFile,
          text : req.body.text 
      })
        // console.log(req.name)
         await music.save()
      .then(()=>{

          res.redirect('/')
          // res.status(201).json({ message: "Playlist qo'shildi ", data: music})
      })
      .catch((error) => {
          res.status(400).json({ message : "Xatolik mavjud", error: error})
      })
  }

exports.playList = async (req, res) => {
try {
  const user =  req.session.user
   const playlists = await PlayList.find().sort({date: -1})
    res.render('./Admin/playlist/all', {layout: "./adminLayout", title: "Palylists", playlists , user})
    // res.status(200).json({message: "Playlist", data: playlists})
} catch (error) {
   res.status(404).json({message: "Xatolik mavjud", data: error})
}
       


  
  }
  


exports.updatePlayList = async (req, res) => {
  
    const list = await PlayList.findByIdAndUpdate({_id: req.params.id})
    .exec((error, data) => {
      if(error) {
        throw error
      } else {
        // console.log(req.params.id)
        const images = data.image
        // console.log(data.image)
        for (let image of images) {
          const filePath = path.join(path.dirname(__dirname) + `/public/uploads/image`, image)
          fs.unlink(filePath, async (error) => {
              if(error) {
                  console.log(error)
              }
          })
        }
        const musics = data.music
        for(let music of musics) {
          const filePath = path.join(path.dirname(__dirname) + `/public/uploads/music`, music)
          fs.unlink(filePath, async (error) => {
              if(error) {
                  console.log(error)
              }
          })
        }
     
      }
    })
    console.log(req.files)
    let musicFiles = req.files.music
    // console.log(musicFiles)
    let musicFile = []
    for (let file of musicFiles) {
      const { filename } = file
      musicFile.push(filename)
    }
  
    let imageFiles = req.files.image
    let imageFile = []
    for (let file of imageFiles) {
      const { filename } = file
      imageFile.push(filename)
    }
      
    
        const newPlaylist = await PlayList.findOneAndUpdate(req.params.id)
        // console.log(newPlaylist)
        newPlaylist.music = musicFile,
        newPlaylist.image = imageFile,
        newPlaylist.name = req.body.name,
        newPlaylist.author = req.body.author
        console.log(newPlaylist.music)
  
        await newPlaylist.save()
        .then( async () => {
          const playlists = await PlayList.find().sort({date: -1})
          res.redirect('/allPlaylist')
          // res.render('./Admin/playlist/all', {layout: "./adminLayout", title: "Palylists", playlists})
          // res.status(200).json({ message: "Playlist o'zgartirildi", data : newPlaylist})
        })
        .catch((error) => {
          res.status(400).json({ message: "Xatolik mavjud", error : error})
        })
    
  
  }

exports.deletePlayList = async (req, res) => {
    await PlayList.findByIdAndDelete({ _id: req.params.id })
    .exec(async(error,data) => {
        if(error) {
            res.send(error)
        }
        else {
          console.log(req.params.id)
          const musicFile = data.music
          console.log(musicFile)
         
          for (let file of musicFile) {
            const filePath = path.join(path.dirname(__dirname) + `/public/uploads/music`, file)
            fs.unlink(filePath, async (error) => {
                if(error) {
                    console.log(error)
                }
            })
          }
  
          const imageFile = data.image
          for (let file of imageFile) {
            const filePath = path.join(path.dirname(__dirname) + `/public/uploads/image`, file)
            fs.unlink(filePath, async (error) => {
                if(error) {
                    console.log(error)
                }
            })
          }
        
                    await PlayList.findByIdAndDelete(req.params.id)
                    res.redirect('/allPlaylist')
            //         res.status(200).json(
            //             {message: "Fayl O'chirildi", 
            //             data: []
            // })
        }
    })
  }

  exports.models