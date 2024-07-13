import { z } from 'zod';

const productItemSchema = z.object({
  body: z.object({
    img: z.string().nonempty(),
    title: z.string().nonempty(),
    brand: z.string().nonempty(),
    price: z.number().positive(),
    availableQuantity: z.number().nonnegative(),
    rating: z.number().min(0).max(5),
    description: z.string().nonempty(),
  }),
});

const updateproductItemSchema = z.object({
  body: z.object({
    img: z.string().nonempty().optional(),
    title: z.string().nonempty().optional(),
    brand: z.string().nonempty().optional(),
    price: z.number().positive().optional(),
    availableQuantity: z.number().nonnegative().optional(),
    rating: z.number().min(0).max(5).optional(),
    description: z.string().nonempty().optional(),
  }),
});

export const productValidationSchema = {
  productItemSchema,
  updateproductItemSchema,
};
