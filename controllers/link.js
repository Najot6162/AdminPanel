const Link = require('../models/linkModels')

exports.addLink = async (req, res) => {
       const links = new Link({
        link: req.body.link
    })
      // console.log(links)
       await links.save()
    .then(()=>{
      res.redirect('/addLink')
        // res.status(201).json({ message: "Link qo'shildi ", data: links})
    })
    .catch((error) => {
        res.status(400).json({ message : "Xatolik mavjud", error: error})
    })
  
   
}

exports.link = async (req, res) => {
  const user =  req.session.user
  const link = await Link.find().sort({ date: -1 })
  res.render('./Admin/Link/all', {layout: "./adminLayout", title: "Palylists", link, user})
  // res.status(200).json({message: "Links", data: link})
  console.log(link)
  
}

exports.add = (req,res) => {
  res.render('./Admin/Link/add', {layout: "./adminLayout", title: "Link"})
}

exports.deleteLink = async (req, res) => {
  await Link.findByIdAndDelete({ _id: req.params.id })
  .exec(async(error,data) => {
      if(error) {
          res.send(error)
      }
      else {
        console.log(req.params.id)
       
                  await Link.findByIdAndDelete(req.params.id)
                  res.redirect('/allLink')
          //         res.status(200).json(
          //             {message: "Fayl O'chirildi", 
          //             data: []
          // })
      }
  })
}


exports.models