import { IUser } from "../../../types/IUser";
import { saveSession } from "../../../utils/auth";
import { goToAdminHome, goToClientHome } from "../../../utils/navigate";

// admin fijo para pruebas
const adminUser: IUser = {
    email: "admin@admin.com",
    password: "1234",
    role: "admin"
};

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
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const textoUsuarios = localStorage.getItem('users');

    let users: IUser[] = [];
    if (textoUsuarios) {
        try {
            users = JSON.parse(textoUsuarios);
        } catch {
            users = [];
        }
    }

    const userEncontrado = users.find(
        user => user.email === email && user.password === password
    );

    // primero chequeo si es el admin 
    if (email === adminUser.email && password === adminUser.password) {
        saveSession(adminUser);
        goToAdminHome();
        return;
    }

    // si no es admin y tampoco existe en users salta error
    if (!userEncontrado) {
        alert('El email o contraseña están incorrectos.');
        return;
    }

    saveSession(userEncontrado);

    if (userEncontrado.role === 'admin') {
        goToAdminHome();
    } else {
        goToClientHome();
    }
});