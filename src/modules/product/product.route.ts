import express from 'express';
import validateRequest from '../../app/middleware/validateSchema';
import { productValidationSchema } from './product.zodValidation';
import { productController } from './product.controller';

const router = express.Router();

router.post(
  '/create-product',
  validateRequest(productValidationSchema.productItemSchema),
  productController.createProductIntoDb,
);
router.get('/', productController.getProductIntoDb);

router.patch(
  '/:id',
  validateRequest(productValidationSchema.updateproductItemSchema),
  productController.updateProductIntoDb,
);
router.delete('/:id', productController.deleteProductIntoDb);

export const productRouter = router;
