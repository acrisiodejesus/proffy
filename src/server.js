//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configuração de nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração
server
    //receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    //Configuração para leitura de arquivos estaticos
    .use(express.static("public"))


    //Rotas da Aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)

    .listen(3000)


