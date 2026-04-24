import"./modulepreload-polyfill-Cf3xff8G.js";function e(){let e=document.getElementById(`contenedor-carrito`);if(!e)return;let n=localStorage.getItem(`cart`);if(!n){e.innerHTML=`<p>El carrito está vacío.</p>`;return}let r=JSON.parse(n);if(e.innerHTML=``,r.length===0){e.innerHTML=`<p>El carrito está vacío.</p>`;return}r.forEach(t=>{let n=document.createElement(`article`);n.classList.add(`item-carrito`),n.innerHTML=`
            <img src="${t.product.image}" alt="${t.product.name}">
            <h3>${t.product.name}</h3>
            <p>Precio: $${t.product.price}</p>
            <p>Cantidad: ${t.quantity}</p>
            <p>Subtotal: $${t.product.price*t.quantity}</p>
        `,e.appendChild(n)});let i=t(r),a=document.createElement(`h2`);a.textContent=`Total: $${i}`,e.appendChild(a)}function t(e){let t=0;return e.forEach(e=>{t+=e.product.price*e.quantity}),t}e();