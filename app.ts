import express from 'express';
import cors from 'cors';
import indexRouter from './routers';
import usersRouter from './routers/users';

const app = express();

app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('App listening on port 3000.');
});
