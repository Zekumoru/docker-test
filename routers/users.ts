import express from 'express';
import createJsonResponse from '../utilities/createJsonResponse';
import User from '../types/User';
import { v4 as uuid4 } from 'uuid';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res.json(
    createJsonResponse<{ users: User[] }>({
      users: [
        {
          id: uuid4(),
          name: 'Zekumoru',
        },
        {
          id: uuid4(),
          name: 'Yuzuki',
        },
      ].sort((a, b) => a.name.localeCompare(b.name)),
    })
  );
});

export default usersRouter;
