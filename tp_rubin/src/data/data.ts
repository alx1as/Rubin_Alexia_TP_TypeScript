import type { Product } from "../types/product.ts";

// Array principal de productos (simula una base de datos)
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Carne, queso, lechuga y tomate.",
    price: 8500000,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pizza Muzzarella",
    description: "Muzzarella, salsa de tomate y aceitunas.",
    price: 11000,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Gaseosa",
    description: "Bebida fría de 500 ml.",
    price: 2500,
    category: "Bebidas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/960px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
  },
];

// Función para obtener las categorías sin repeticiones

export function obtenerCategorias(): string[] {
  const categorias = PRODUCTS.map(producto => producto.category); // recorro los productos y saco la categoría de cada uno
  const categoriasUnicas = [...new Set(categorias)]; //Set para eliminar categorías repetidas
  return categoriasUnicas;   // devuelvo el array limpio
}