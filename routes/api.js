const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); // bodyparses se tornou uma dependencia nas novas versoes do node entao nao é preciso instala-lo apenas importa-lo
const cors = require('cors');
const posts = require('../model/posts');

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options))

// retornar todos os posts que temos disponivel
router.get('/all', (req,res) => {
    res.json(JSON.stringify(posts.getAll()))
    
})

// criando novo post e adicionando ao array de posts
// pra pegar os dados do body da requisição precisamos do bodyparser sendo passado como middleware
router.post('/new', bodyParser.json(), (req,res) => {
   
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description)
    
    res.send("Post Adicionado")
})


module.exports = router;
