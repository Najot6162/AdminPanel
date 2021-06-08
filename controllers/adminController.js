const PlayList = require('../models/playListModel')
const Galarey = require('../models/galareyModels')
const Home = require('../models/homeModels')
const Link = require('../models/linkModels')

exports.signIn = (req,res) => {
    res.render('./main/signIn', {layout: "./regLayouts", title: "Login page"})
}

exports.galareyAdd = (req,res) => {
    res.render('./Admin/galarey/add', {layout: "./adminLayout", title: "Galarey"})
}


exports.playlist = async (req, res) => {
    try {
      const playList = await PlayList.find().sort({ date: -1 })
    
      res.status(200).json({message: "Playlist", data: playList})
     
    } catch (error) {
          res.status(404).json({message: "Xatolik mavjud", data: error})
    } 
    }

    exports.galarey = async (req, res) => {
        try {
          const galarey = await Galarey.find().sort({ date: -1 })
         
          res.status(200).json({message: "Galareys", data: galarey})
   
        } catch (error) {
              res.status(404).json({message: "Xatolik mavjud", data: error})
        } 
        }

        exports.homePage = async (req, res) => {
            try {
               const home = await Home.find().sort({date: -1})
             
                res.status(200).json({message: "Home Page", data: home})
            } catch (error) {
               res.status(404).json({message: "Xatolik mavjud", data: error})
            }
            }

            exports.link = async (req, res) => {
                try {
                       const link = await Link.find().sort({ date: -1 })
               
                res.status(200).json({message: "Links", data: link})
                console.log(link)
                } catch (error) {
                    res.status(404).json({message: "Xatolik mavjud", data: error})
                }
             
                
              }
      
  
exports.models