import express from 'express';
import cors from 'cors';
import indexRouter from './routers';

const app = express();

app.use(cors());
app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('App listening on port 3000.');
});
