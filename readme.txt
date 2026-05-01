LINK AL VIDEO EXPLICATIVO:
https://www.youtube.com/watch?v=lp4H7ysQlUY


Food Store – Parcial Programación III

Para ejecutar el proyecto:
- pnpm install
- pnpm dev

Para generar build:
- pnpm build

Para previsualizar el build:
- pnpm preview



Descripción
El presente proyecto consiste en el desarrollo de una aplicación web de tipo catálogo de productos, implementada con HTML, CSS y TypeScript, utilizando Vite como herramienta de construcción y pnpm como gestor de paquetes.
El objetivo principal fue construir una interfaz funcional que permita visualizar, filtrar y gestionar productos dentro de un flujo básico de compra, sin integración con backend, conforme a los requerimientos del parcial.

Funcionalidades principales
1. Catálogo de productos (Home)
La vista principal (home.html) implementa un catálogo dinámico de productos:
Los productos se cargan desde un archivo data.ts, que actúa como fuente de datos simulada.
El renderizado se realiza dinámicamente mediante TypeScript.
Cada producto incluye:
Imagen
Nombre
Descripción
Precio
Botón de acción (agregar al carrito)


2. Filtrado por categoría
Las categorías se obtienen dinámicamente a partir de los datos.
Se renderizan como una lista interactiva.
Permiten filtrar los productos mostrados en el catálogo.
Incluye opción para visualizar todos los productos.


3. Búsqueda por nombre
Implementada mediante un formulario con input de texto.
Permite filtrar productos por coincidencia parcial en el nombre.
El filtrado se realiza en memoria sobre el conjunto de productos.
Se contempla el caso sin resultados.


4. Carrito de compras (simulado)
La aplicación incluye una vista de carrito (cart.html) con las siguientes características:
Permite agregar productos desde el catálogo.
Los datos se almacenan en localStorage.
Se renderiza dinámicamente el contenido del carrito.
Se muestra:
Nombre del producto
Cantidad
Precio unitario
Subtotal
Total general

Importante:
El carrito es completamente simulado, sin persistencia en servidor ni conexión a backend, tal como fue requerido en el enunciado.


Decisiones técnicas
Se utilizó TypeScript para tipar estructuras como productos, categorías y elementos del carrito.
El archivo data.ts funciona como una fuente de datos embebida, simulando una base de datos.
Se empleó localStorage para persistir el estado del carrito entre recargas.
La aplicación está organizada por módulos, separando:
datos
vistas
lógica
tipos
Tecnologías utilizadas
HTML5
CSS3
TypeScript
Vite
pnpm



Estructura del proyecto
src/
 ├── data/
 │    └── data.ts
 ├── pages/
 │    ├── store/
 │    │    ├── home/
 │    │    └── cart/
 ├── types/
 ├── utils/
 └── main.ts


Configuración y ejecución
El proyecto fue configurado con Vite para manejar múltiples puntos de entrada:
index.html
store/home/home.html
store/cart/cart.html

Scripts disponibles
pnpm dev      # entorno de desarrollo
pnpm build    # build de producción
pnpm preview  # vista previa del build

Ejecución
Instalar dependencias:
pnpm install
Iniciar servidor de desarrollo:
pnpm dev


Consideraciones finales
El proyecto cumple con los siguientes requerimientos:
- Implementar un catálogo dinámico
- Permitir filtrado por categoría
- Incorporar búsqueda por nombre
- Simular un carrito de compras funcional sin backend

Se priorizó una estructura clara, separación de responsabilidades y un flujo coherente entre vistas.