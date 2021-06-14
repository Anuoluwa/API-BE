import { Router } from 'express';
import tryCatch from '../../helpers/tryCatch';
import controllers from './supplier.controller';

const router = Router();
// user registration router is in authRouter
// /api/list
router
  .route('/')
  .get(controllers.getAllMany)
  //.get(controllers.getOne)
  .post(controllers.createOne)


// /api/list/:id
router
  .route('/:id')
  .get(controllers.getOneProductWithCategory)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router;