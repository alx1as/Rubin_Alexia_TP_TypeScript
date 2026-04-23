import type { Product } from "../types/product.ts";

// Array principal de productos (simula una base de datos)
export const PRODUCTS: Product[] = [
  // HAMBURGUESAS
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Carne, queso, lechuga y tomate.",
    price: 8500,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    name: "Hamburguesa Doble",
    description: "Doble carne, doble cheddar y bacon.",
    price: 12000,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 3,
    name: "Hamburguesa Veggie",
    description: "Medallón vegetal, palta y tomate.",
    price: 9500,
    category: "Hamburguesas",
    image: "https://www.eltrecetv.com.ar/resizer/v2/hamburguesa-vegetariana-acierto-o-aberracion-FTFWEOM2LVHRNMNERCS35POGGY.jpg?auth=e797b2a3438216987870f4db444ec86e746de9115b7b7a673444c869db26a01f&width=1440",
  },

  // PIZZAS
  {
    id: 4,
    name: "Pizza Muzzarella",
    description: "Muzzarella, salsa de tomate y aceitunas.",
    price: 11000,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
  },
  {
    id: 5,
    name: "Pizza Napolitana",
    description: "Tomate fresco, ajo y albahaca.",
    price: 12000,
    category: "Pizzas",
    image: "https://imag.bonviveur.com/pizza-napolitana.webp",
  },

  // BEBIDAS
  {
    id: 6,
    name: "Gaseosa",
    description: "Bebida fría de 500 ml.",
    price: 2500,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a",
  },
  {
    id: 7,
    name: "Agua Mineral",
    description: "Agua sin gas 500 ml.",
    price: 1800,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad",
  },
  {
    id: 8,
    name: "Cerveza",
    description: "Botella 473 ml bien fría.",
    price: 3500,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9",
  },

  // PAPAS
  {
    id: 9,
    name: "Papas Fritas",
    description: "Porción clásica.",
    price: 4000,
    category: "Papas",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
  },
  {
    id: 10,
    name: "Papas con Cheddar",
    description: "Papas fritas con cheddar.",
    price: 5500,
    category: "Papas",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
  },

  // POSTRES
  {
    id: 11,
    name: "Brownie",
    description: "Brownie de chocolate con nuez.",
    price: 3000,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    id: 12,
    name: "Helado",
    description: "Cucurucho de 2 sabores.",
    price: 3200,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1570197571499-166b36435e9f",
  },

  // SÁNDWICHES
  {
    id: 13,
    name: "Sándwich de Jamón y Queso",
    description: "Clásico tostado.",
    price: 4500,
    category: "Sandwiches",
    image: "https://okdiario.com/img/2018/03/18/sandwich-mixto-655x368.jpg",
  },
  {
    id: 14,
    name: "Sándwich de Pollo",
    description: "Pollo, lechuga y mayonesa.",
    price: 6000,
    category: "Sandwiches",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
];
// Función para obtener las categorías sin repeticiones

export function obtenerCategorias(): string[] {
  const categorias = PRODUCTS.map(producto => producto.category); // recorro los productos y saco la categoría de cada uno
  const categoriasUnicas = [...new Set(categorias)]; //Set para eliminar categorías repetidas
  return categoriasUnicas;   // devuelvo el array limpio
}