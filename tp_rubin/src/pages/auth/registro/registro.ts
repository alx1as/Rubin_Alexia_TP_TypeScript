//aca tengo que traaer el formulario, email y password del usuario. 
//Objetivo: tomar datos, crear usuario, y guardarlo el localStorage.
// el que hará la validación va a ser login asi que aca solo registro.
import { IUser } from "../../../types/IUser";


//traigo los datos:
const form = document.querySelector('#registroUser') as HTMLFormElement | null;
const emailInput = document.querySelector('#email') as HTMLInputElement | null;
const passwordInput = document.querySelector('#password') as HTMLInputElement | null;

        //* chequeo que los elementos no den null
    if (!form || !emailInput || !passwordInput) {
    throw new Error('No se encontraron los elementos del formulario');
}


//le agrego un evento al form para escuchar el submit y leer los datos:
form.addEventListener('submit', (event) => {
    event.preventDefault(); //evita que se recargue la página al enviar el formulario

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim(); //trim() elimina los espacios en blanco al principio y al final del string

    //validación básica:
    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    //1.leo users del localStorage para leer es getItem()y los guardo en una variable.
    const textoUsuarios = localStorage.getItem('users');
    //2. convierto a array.
  //const users: IUser[] = textoUsuarios ? JSON.parse(textoUsuarios) : [];
   
  //versión más robusta -> evita que la app se rompa si el localStore se corrompoe:
  let users: IUser[] = [];
        if (textoUsuarios) {
        try {
            users = JSON.parse(textoUsuarios);
        } catch {
            users = [];
        }
        }
    //verifico que el mail NO esté registrado.

  if (users.some((user) => user.email === email)) {
    alert('El email ya está registrado. Por favor, use otro email.');
    return;
  }

    //3. creo un nuevo usuario con los datos del formulario.
    const newUser: IUser = { //forzar que cumpla IUser
        email,
        password,
        role: 'client' //por defecto le asignamos el rol de cliente
    };

    //4. agrego el nuevo usuario al array de usuarios.
    users.push(newUser);

    //5. convierto el array a texto y lo guardo en localStorage.
    localStorage.setItem('users', JSON.stringify(users));

    //6. limpio el formulario y muestro un mensaje de éxito.
    form.reset();
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
});
