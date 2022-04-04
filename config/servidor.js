const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.static("./assets"))

const consign = require("consign")

consign().include("./routes/").into(app)

const porta = 7777 || process.env.PORT

module.exports = {app, porta}