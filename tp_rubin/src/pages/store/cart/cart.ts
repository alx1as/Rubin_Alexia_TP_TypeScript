import type { CartItem } from "../../../types/product";

//renderizado de los productos en el carrito:
function renderizarCarrito():void {
    //buscar el contenedor en el html
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    if (!contenedorCarrito) return;

    // traigo la memoria del localstorage con la clave cart
    const carritoGuardado= localStorage.getItem("cart");
    //si no existe array o esta vacio:
    if (!carritoGuardado) {
        contenedorCarrito.innerHTML="<p>El carrito está vacío.</p>";
        return;
    }
    // convierto el texto en un array:
    const carrito: CartItem[] = JSON.parse(carritoGuardado);

    //limpio contenedor antes de renderizar
    contenedorCarrito.innerHTML="";

    if (carrito.length === 0) {
    contenedorCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    return;
}

    //recorro el arreglo y por cada uno creo article, y muestro nombre precio y cantidad
    carrito.forEach((item)=> {
        const itemCarrito = document.createElement("article");
        itemCarrito.classList.add("item-carrito");

        //muestro caracteristicas de cada producto
        itemCarrito.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.name}">
            <h3>${item.product.name}</h3>
            <p>Precio: $${item.product.price}</p>
            <p>Cantidad: ${item.quantity}</p>
            <p>Subtotal: $${item.product.price * item.quantity}</p>
        `;
        //agregamos el item al contenedor principal como en los otros 
        contenedorCarrito.appendChild(itemCarrito);
    })
    //llamo a la funcion para calcular el total del carrito.
    const total = calcularTotal(carrito);
    const totalElemento = document.createElement("h2");
    totalElemento.textContent = `Total: $${total}`;
    contenedorCarrito.appendChild(totalElemento);
}

// FUncion para calcular el total del carrito
function calcularTotal(carrito: CartItem[]): number {
    let total = 0;

    carrito.forEach((item) => {
        total += item.product.price * item.quantity;
    });

    return total;
}

renderizarCarrito();