//renderizado de productos, filtrado y busqueda por nombre.

//1. Renderizado de productos
import { PRODUCTS, obtenerCategorias } from "../../../data/data";
import type { Product, CartItem } from "../../../types/product";

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
                            //(parentesis) boton agregar -> le pongo un evento para el carrito.
                                const botonAgregar = articuloProducto.querySelector(".agregar-btn") as HTMLButtonElement | null;
                                    if (botonAgregar) {
                                        botonAgregar.addEventListener("click", () => {
                                            agregarAlCarrito(producto);
                                        });
                                    }

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





// Busqueda por nombre //
//traigo el formulario y el input del html
const formularioBuscar = document.getElementById("form-busqueda") as HTMLFormElement | null;
const inputBuscar = document.getElementById("input-busqueda") as HTMLInputElement | null;
//verifico que existan en el dom
if (!formularioBuscar || !inputBuscar) {
    throw new Error ("No se encontro el formulario o input.")
}

function buscarProductosPorNombre(): void {
    //guardo el texto del input en la constante texto buscado, elimino espacios con trim y paso a minusculas el texto.
    const textoBuscado = inputBuscar!.value.trim().toLocaleLowerCase();

    //si el input esta vacio vuelvo a mostrar todos los productos
    if (textoBuscado === "") {
        renderizarProductos(PRODUCTS);
        return;
    }

    //Filtramos
    const productoFiltradoPorNombre = PRODUCTS.filter((producto)=> {
        return producto.name.toLocaleLowerCase().includes(textoBuscado) //busco en productos si alguno coincide con el texto buscado.
    });

    //si no hay coincidencia:
    if (productoFiltradoPorNombre.length===0) {
       const contenedorProductos = document.getElementById("contenedor-productos");
       if (!contenedorProductos) return;
       contenedorProductos.innerHTML = "<p> No se encontraron productos.</p>"
       return;
    }

    //si hay coincidencia:
    renderizarProductos(productoFiltradoPorNombre);
}

// agrego un evento para escuchar mientras la persona escribe en el input:
inputBuscar.addEventListener("input", buscarProductosPorNombre);

// dejo tambien el submit por si la persona aprieta Enter o el boton de buscar:
formularioBuscar.addEventListener("submit", (evento) => {
    evento.preventDefault(); //evita recargue de pag
    buscarProductosPorNombre();
});




//Función para agregar producto al carrito
function agregarAlCarrito(productoElegido:Product): void {
    const carritoGuardado = localStorage.getItem("cart"); //busco si hay algo en localstorage con la clave cart.
    //si existe lo convierto en array, sino, arranco un array vacío:
    let carrito : CartItem[] = carritoGuardado ? JSON.parse(carritoGuardado) : []

    //verifico si el producto ya esta en el carrito:
    const productoExistente = carrito.find(
        (item) => item.product.id === productoElegido.id);
    //si existe aumento 1 en quantity
    if(productoExistente){
        productoExistente.quantity += 1;
    } else { //si no existe agrego el producto entero en el array carrito.
        carrito.push({
            product: productoElegido,
            quantity: 1
        });
    }

    //guardo el carrito actualizado:
    localStorage.setItem('cart', JSON.stringify(carrito));
    alert("Producto agregado con éxito.")
}




 //renderizo productos pasando el array como argumento de la funcion :
renderizarProductos(PRODUCTS);
//renderizado de categorias 
renderizarCategorias();
//renderizado por nombre