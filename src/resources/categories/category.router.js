import { Router } from 'express';
import tryCatch from '../../helpers/tryCatch';
import controllers from './category.controller';

const router = Router();
// user registration router is in authRouter
// /api/list
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/list/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router;