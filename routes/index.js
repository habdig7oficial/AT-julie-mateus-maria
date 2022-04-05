module.exports = function (app) {

    var conexao = require("../config/database")

    app.get("/", async function(req,res)  {
        conexao()
        var metas = require("../models/metas")
        var gallery = require("../models/gallery")
        var documentos = await metas.find()/*.limit(3)*/.sort(
        {"_id":-1})
        var imagens = await gallery.find()./*limit(6).*/sort({"_id":-1})

        res.render("index.ejs",{dados:documentos,img:imagens})
    })


app.post("/", function(req,res) {
   
    conexao()

    var modelo = require("../models/mensagem")

    var documento = new modelo({
        nome: req.body.first_name,
        sobrenome: req.body.last_name,
        email: req.body.email,
        mensagem: req.body.message

    })
    .save()
    .then(function()  {
    res.redirect("/")
})
.catch(function()  {
    res.send("Não foi possível gravar o documento no Banco de Dados")
})

})
}
