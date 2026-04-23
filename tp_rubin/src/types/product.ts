export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
/* product guarda el producto completo
quantity guarda cuántas unidades tiene en el carrito */