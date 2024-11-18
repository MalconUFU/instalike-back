import express from 'express';

const app = express();
app.listen(3000, () => { //servidor local

    console.log("Servidor escutando..."); // resposta

});

//requisição e resposta
app.get('/api', (req, res) => {

    res.status(200).send('Rota Inicial'); //rota - localhost:3000/api

});