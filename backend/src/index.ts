import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import libraryRouter from './modules/library/application/router';

const API_PREFIX = '/api';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(API_PREFIX, libraryRouter());

// Hello world route
app.get('/', (req, res) => {
  res.send('Welcome to the 2024 #HouseOfCode backend!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});

