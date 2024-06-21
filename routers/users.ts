import express from 'express';
import createJsonResponse from '../utilities/createJsonResponse';
import User from '../types/User';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res.json(
    createJsonResponse<{ users: User[] }>({
      users: [
        {
          id: '0079d298-9df2-4ca9-bda1-4679d943d454',
          name: 'Zekumoru',
        },
        {
          id: '8b391f50-909b-481e-862a-8b57e98f3b7f',
          name: 'Yuzuki',
        },
      ].sort((a, b) => a.name.localeCompare(b.name)),
    })
  );
});

export default usersRouter;
