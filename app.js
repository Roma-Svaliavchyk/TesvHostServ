import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { orderCreateValidation } from './validations/valiadstions.js';

import * as TextController from './controllers/TextController.js';

mongoose
    .connect('mongodb+srv://mamba:2LCsKzqjHmFNDJLB@cluster0.ta4zajx.mongodb.net/test-serv-text?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.listen(3003, (err) => {
    if(err){
        return console.log(err)
    };

    console.log('Server: '+ 3003 +' OK');
});

app.use(express.json());
app.use(cors());


app.get('/' ,(req, res) => {    
    res.send('Hello expres')
});

app.get('/text', TextController.getAll);
app.get('/text/:id', TextController.getOne);
app.post('/text', TextController.create);
app.delete('/text/:id', TextController.remove);
app.patch('/text/:id', TextController.update);

//app.get('/userOrders/:email', TextController.getUserOrders);
