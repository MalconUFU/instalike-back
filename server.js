import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
routes(app);

app.listen(3000, () => { //servidor local

    console.log("Servidor escutando..."); // resposta

});

//function buscarPostPorId(id){

//    return posts.findIndex((post) => {
//        return post.id === Number(id);
//    });

//}

//app.get('/posts/:id', (req, res) => {

//    const index = buscarPostPorId(req.params.id)
//    res.status(200).json(posts[index]);

//});