import { clearSession } from "../../utils/auth";
import { goToLogin } from "../../utils/navigate";

// traigo el botón de cerrar sesión
const logoutBtn = document.querySelector("#logoutBtn") as HTMLButtonElement | null;

// si existe escucho el click
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        // borro la sesión actual
        clearSession();

        // lo mando a login
        goToLogin();
    });
}