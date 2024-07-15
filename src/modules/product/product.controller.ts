import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { productService } from './product.service';

const createProductIntoDb = catchAsync(async (req, res) => {
  const result = await productService.createProductIntoDb(req.body);

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'product created successfully',
    data: result,
  });
});
const getProductIntoDb = catchAsync(async (req, res) => {
  const result = await productService.getProductIntoDb(req.query);

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'product found successfully',
    data: result,
  });
});
const getMinProductPriceIntoDb = catchAsync(async (req, res) => {
  const result = await productService.getMinProductPrice();

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Minimum product found successfully',
    data: result,
  });
});
const getMaxProductPriceIntoDb = catchAsync(async (req, res) => {
  const result = await productService.getMaxProductPrice();

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Maximum product found successfully',
    data: result,
  });
});

const updateProductIntoDb = catchAsync(async (req, res) => {
  const result = await productService.updateProductIntoDb(
    req.params.id,
    req.body,
  );

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'product updated successfully',
    data: result,
  });
});

const deleteProductIntoDb = catchAsync(async (req, res) => {
  const result = await productService.deleteProductIntoDb(req.params.id);

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'product deleted successfully',
    data: result,
  });
});

export const productController = {
  createProductIntoDb,
  getProductIntoDb,
  updateProductIntoDb,
  deleteProductIntoDb,
  getMinProductPriceIntoDb,
  getMaxProductPriceIntoDb,
};
