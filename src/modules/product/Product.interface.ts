export type TProductItem = {
  img: string;
  title: string;
  brand: string;
  price: string;
  availableQuantity: string;
  rating: string;
  description: string;
};

export type Payload = {
  search?: string;
  min?: number;
  max?: number;
  sort?: 'asc' | 'desc';
};
