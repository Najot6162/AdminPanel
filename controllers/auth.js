const User = require('../models/userModel')


exports.register = async (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password:req.body.password
      });
      user.save((err, docs) => {
        if (err) {
          res.send(err)
        } else {
            console.log(docs)
          res.status(201).json({
            message: "Foydalanuvchi ro'yxatga olindi."
          })
        }
      });
  }

exports.login = async (req, res, next) => {
    const username = req.body.username,
    password = req.body.password;
    try {
      const user = await User.findOne({ username: username }).exec();
      if(!user) {
        res.redirect('/login')
        // res.status(404).json({ message: "Login yoki parol xato"})
      }
      
      user.comparePassword(password, (error, match) => {
          if(!match) {
            res.redirect('/login')
            // res.status(404).json({ message: "Login yoki parol xato"})
          }
      });
      // res.status(200).json({ message: "Tizimga muvaqqaiyatli kirildi"})
  //  if(user.role !== 'admin') {
  //    res.redirect('/login')
  //  }

      req.session.user = user;
      // console.log(req.session)
      req.session.isAuth = true
      res.redirect('/')
      // res.redirect("/add");
  } catch (error) {
    console.log(error)
  }
  }
exports.logout = async (req, res) => {
    req.session.destroy()
    res.clearCookie('user_sid')
    res.redirect('/login')
  }

exports.signIn = (req,res) => {
    res.render('./main/signIn', {layout: "./regLayouts", title: "Login page"})
}

exports.user = async (req, res) => {
    const all = await User.find()
    res.send(all)
}
  exports.models