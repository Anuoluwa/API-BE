import express from 'express';
import { Router } from 'express';
import authRouter from '../resources/auth/authRouter';
import { protect } from '../middlewares/authMiddleware';
import userRouter from '../resources/users/userRouter';
import categoryRouter from '../resources/categories/category.router';
import productRouter from '../resources/products/product.router';
import supplierRouter from '../resources/suppliers/supplier.router';

export const app = express();
const router = Router();


router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/suppliers', supplierRouter);

export default router;
