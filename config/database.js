const doenv = require("dotenv").config()
const mongoose = require('mongoose')

const conexao = async() =>{
    /*conexão local*/
    /**/
    /*conexao atlas*/


    var bdlocal = await mongoose.connect('mongodb://localhost/at-1tri')

    //let atlas = await mongoose.connect (process.env.SCRIPTDB)
}

module.exports = conexao

