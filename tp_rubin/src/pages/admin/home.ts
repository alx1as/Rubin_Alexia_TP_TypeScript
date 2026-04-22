import { clearSession } from "../../utils/auth";
import { goToLogin } from "../../utils/navigate";

// traigo el botón para cerrar sesión
const logoutBtn = document.querySelector("#logoutBtn") as HTMLButtonElement | null;

// si existe, escucho el click
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        clearSession();
        goToLogin();
    });
}