import { TProductItem } from './Product.interface';
import Product from './product.model';

const createProductIntoDb = async (payload: TProductItem) => {
  const result = await Product.create(payload);

  return result;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getProductIntoDb = async (payload: any) => {
  const { search, min, max, sort } = payload;

  const searchableFields = ['title', 'brand'];
  if (search) {
    const searchValues = await Product.aggregate([
      {
        $match: {
          $or: searchableFields?.map((item) => {
            return { [item]: { $regex: search, $options: 'i' } };
          }),
        },
      },
    ]);
    const result = searchValues;
    return result;
  } else if (min && max) {
    const result = Product.find({ price: { $gte: min, $lte: max } });
    return result;
  } else if (sort) {
    const sortOrder = sort === 'asc' ? 1 : -1;
    const result = Product.find().sort({ price: sortOrder });
    return result;
  } else {
    const result = await Product.find({});
    return result;
  }
};
const getMinProductPrice = async () => {
  const minPriceItem = await Product.findOne()
    .sort({ price: 1 })
    .limit(1)
    .select('price');
  return minPriceItem;
};
const getMaxProductPrice = async () => {
  const maxPriceItem = await Product.findOne()
    .sort({ price: -1 })
    .limit(1)
    .select('price');
  return maxPriceItem;
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
  getMinProductPrice,
  getMaxProductPrice,
};
