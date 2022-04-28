import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { router } from '../routes/';
import { app } from './factories/app';

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => res.send('tua mae'));

app.listen(3308, () => {
  console.log('Server is Running at http://localhost:3308');
});
