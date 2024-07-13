import { TProductItem } from './Product.interface';
import Product from './product.model';

const createProductIntoDb = async (payload: TProductItem) => {
  const result = await Product.create(payload);

  return result;
};
const getProductIntoDb = async () => {
  const result = await Product.find({});

  return result;
};

const updateProductIntoDb = async (
  id: string,
  payload: Record<string, unknown>,
) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });

  return result;
};
const deleteProductIntoDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);

  return result;
};

export const productService = {
  createProductIntoDb,
  getProductIntoDb,
  updateProductIntoDb,
  deleteProductIntoDb,
};
