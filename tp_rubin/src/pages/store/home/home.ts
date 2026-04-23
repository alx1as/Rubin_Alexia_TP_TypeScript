//logica de renderizado
/*Objetivos:
1.Traigo los productos desde data.ts
2. Busco el contenedor en el HTML
3. Recorro los productos
4. Creo un elemento por cada uno
5. Lo agrego al DOM
 */

//1.
import { PRODUCTS, obtenerCategorias } from "../../../data/data";

import type { Product } from "../../../types/product";

function renderizarProductos(productos: Product[]): void { //1. recibe productos del array que cree en data llamado PRODUCTS. a la variable el nombre le pongo yo
    const contenedorProductos = document.getElementById('contenedor-productos'); //2. busco del html el contenedor
    if (!contenedorProductos) return;
    contenedorProductos.innerHTML = ""; //esta limpieza evita duplicados

    productos.forEach((producto)=> { //3.
        const articuloProducto = document.createElement("article"); //creo un <article> por cada producto.
        articuloProducto.classList.add("producto-item") //agrego clases para estilizar

    //4. renderizo productos, por cada articulo :
      articuloProducto.innerHTML = `
      <img src="${producto.image}" alt="${producto.name}">
      <h3>${producto.name}</h3>
      <p>${producto.description}</p>
      <span>$${producto.price}</span>
      <button class="agregar-btn">Agregar</button>
    `;

        //5. ahora agrego el producto al contenedor principal:
     contenedorProductos.appendChild(articuloProducto);
    })

}

// Función para el renderizado de las categorías, = que la anterior
function renderizarCategorias (): void {
    const listaCategorias = document.getElementById('lista-categorias'); //busco en el html la lista de categorias
    if (!listaCategorias) return;
    listaCategorias.innerHTML = ""; //evita duplicados

    //traigo las categorias desde data;
    const categorias = obtenerCategorias();

    //VER TODOS LOS PRODUCTOS
    const itemTodos = document.createElement("li");
        itemTodos.textContent = "Todos los productos";
        itemTodos.classList.add("categoria-item"); //le agrego clase tambien
        itemTodos.addEventListener("click", () => {renderizarProductos(PRODUCTS)});
        listaCategorias.appendChild(itemTodos);

    //recorro el array:
    categorias.forEach((categoria)=> {
        
        const itemCategoria= document.createElement("li"); //un li para cada categoria
        itemCategoria.classList.add("categoria-item");
        itemCategoria.textContent = categoria;



        //renderizado por categoria -> agregamos un evento que escuche el clic
        itemCategoria.addEventListener("click", () => {
            //filtrado:
            const filtroPorCategoria = PRODUCTS.filter(
                (producto) => producto.category === categoria);
            renderizarProductos(filtroPorCategoria); //renderizado condicional reutilizando funcion anterior.
        });
                //agrego el li dentro de la ul
        listaCategorias.appendChild(itemCategoria)
    })
}


 //renderizo productos pasando el array como argumento de la funcion :
renderizarProductos(PRODUCTS);
//renderizado de categorias 
renderizarCategorias();