const PORT = 3000;
const express = require('express');
const apiRoute = require('./routes/api')
const path = require('path'); 

// teremos duas rotas
// uma pra buscar todos os posts
// e outra pra adicionar um novo post
const app = express();

app.use('/api', apiRoute)
app.use('/',express.static(path.join(__dirname,"public")));


app.listen(PORT, () => {
    console.log('Server rodando na porta', PORT)
})





