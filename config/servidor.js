const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.static("./assets"))

const consign = require("consign")

consign().include("./routes/").into(app)

const porta = process.env.PORT || 7777  

module.exports = {app, porta}