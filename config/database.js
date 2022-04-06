const doenv = require("dotenv").config()
const mongoose = require('mongoose')

const conexao = async() =>{
    /*conexão local*/
    /*var bdlocal = await mongoose.connect('mongodb://localhost/at-1tri')*/
    /*conexao atlas*/

  
    let atlas = await mongoose.connect (process.env.SCRIPTDB)
}

module.exports = conexao

