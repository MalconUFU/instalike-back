import express from 'express';

//MOCK
const posts = [
    { 
        id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" 
    },
    { 
        id: 2, descricao: "Gato fofo dormindo", imagem: "https://placekitten.com/400/300" 
    },
    { 
        id: 3, descricao: "Paisagem incrível!", imagem: "https://picsum.photos/id/10/300/200" 
    },
    { 
        id: 4, descricao: "Cachorro brincando no parque", imagem: "https://dog.ceo/api/breeds/image/random" 
    },
    { 
        id: 5, descricao: "Comida deliciosa!", imagem: "https://source.unsplash.com/random/300x200" 
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => { //servidor local

    console.log("Servidor escutando..."); // resposta

});

//requisição e resposta
app.get('/posts', (req, res) => {

    res.status(200).json(posts); //rota - localhost:3000/api
    //HTTP - código númerico associado a texto - https://http.cat/

});

function buscarPostPorId(id){

    return posts.findIndex((post) => {
        return post.id === Number(id);
    });

}

app.get('/posts/:id', (req, res) => {

    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]); 

});