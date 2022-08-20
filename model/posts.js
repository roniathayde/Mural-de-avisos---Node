module.exports = {
    // todo post precisa ter: id, title e description
    posts: [
        {
            id:'weweqweqwd',
            title: 'teste do mural',
            description: 'descrição teste',
        },
    ],

    // retorna todos os posts
    getAll(){
        return this.posts;
    },
    
    newPost(title, description){
        this.posts.push( {id: generateID(), title, description});
    },

}

function generateID(){
    return Math.random().toString(36).substring(2,9) // base 36 é: todas letras e todos numeros decimais
}