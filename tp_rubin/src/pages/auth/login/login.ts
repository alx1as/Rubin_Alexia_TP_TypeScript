/* 

1. El usuario completa mail y contraseña del form loguin
2. Hace submit
3. Evito recarga
4. Traigo array de usuarios desde localStorage
5. Busco coincidencia
6. Si no hay coincidencia → mostrar error
7. Si hay coincidencia → guardar sesión
8. Redirigir según rol*/

import { IUser } from "../../../types/IUser";
import { saveSession } from "../../../utils/auth";
import { goToAdminHome, goToClientHome } from "../../../utils/navigate";

//1. traigo mail y contraseña del formulario:
const form = document.querySelector('#loginUser') as HTMLFormElement | null;
const emailInput = document.querySelector('#email') as HTMLInputElement | null;
const passwordInput = document.querySelector('#password') as HTMLInputElement | null;

//2. chequeo que los elementos no den null:
if (!form || !emailInput || !passwordInput) {
    throw new Error('No se encontraron los elementos del formulario');
}

//3. le agrego un evento al form para escuchar el submit y leer los datos:
form.addEventListener('submit', (event) => {
    event.preventDefault(); //evita que se recargue la página al enviar el formulario

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim(); //trim() elimina los espacios en blanco al principio y al final del string

    //validación básica:
    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    //4. leo users del localStorage para leer es getItem()y los guardo en una variable.
    const textoUsuarios = localStorage.getItem('users');
    //5. convierto a array.
    let users: IUser[] = [];
        if (textoUsuarios) {
        try {
            users = JSON.parse(textoUsuarios);
        } catch {
            users = [];
        }}
    
    //6. busco coincidencia:
    const userEncontrado = users.find(user => user.email === email && user.password === password)
    if (!userEncontrado) {
        alert('El email o contraseña están incorrectos.');
        return;
    }

    //7. si todo está bien, guardo sesion actual con la clave userData.
    saveSession(userEncontrado);

    //8. redirigir según rol:
    if (userEncontrado.role === 'admin') {
    goToAdminHome();
} else {
    goToClientHome();
}
});      