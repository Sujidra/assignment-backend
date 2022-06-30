const express = require("express")
const app = express()


app.use('/auth', require("./auth.routes.js"))
app.use('/video', require("./video.routes.js"))


module.exports = app
