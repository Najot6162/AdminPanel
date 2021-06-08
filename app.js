require('express-async-errors');

const error = require('./middleware/error');



const layouts = require('express-ejs-layouts');

const cookieParser = require("cookie-parser");

const session = require("express-session");

const winston = require('winston');

const express = require('express'),

bodyParser = require('body-parser')

const connection = require('./data/connect');

const methodOverride = require("method-override");

app = express()

connection()

const PORT = process.env.PORT || 3200;

app.set('view engine','ejs')

app.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));
app.locals.moment = require('moment')

const session_time =  24 * 60 * 60 * 1000
app.use(
    session({
      key: "user_sid",
      secret: "somerandonstuffs",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: session_time
      },
    })
  );

app.use(layouts)
app.use(express.static('public'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


            //Routes
app.use('/home', require('./router/home'))
app.use('/', require('./router/adminRouter'));
app.use('/auth', require('./router/auth'))
app.use('/galarey', require('./router/galarey'))
app.use('/playlist', require('./router/playList'))
app.use('/link', require('./router/link'))
app.use('/app', require('./router/AppRouter'))
app.use(error)
app.use(cookieParser)

// process.on('uncaughtException', ex => {
//     winston.error(ex.message, ex);
//     process.exit(1)
// })

// process.on('unhandledRejection', ex => {
//     winston.error( 'unhandledRejection error '+ ex.message, ex);
//     process.exit(1)
// })

// app.listen(app.get('port'),()=>{
//     console.log(`Server ishga tushdi. Port: ${app.get('port')}`)
// })
app.listen(PORT,()=>{
  console.log(`Server ishga tushdi. Port: ${PORT}`)
})
// module.exports = app