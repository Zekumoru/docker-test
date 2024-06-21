import express from 'express';
import createJsonResponse from '../utilities/createJsonResponse';
import User from '../types/User';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res.json(
    createJsonResponse<{ users: User[] }>({
      users: [],
    })
  );
});

export default usersRouter;
