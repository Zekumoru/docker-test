import express from 'express';
import createJsonResponse from '../utilities/createJsonResponse';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.json(
    createJsonResponse({
      message:
        'Application is running smoothly! Try the available endpoints: /users',
    })
  );
});

export default indexRouter;
