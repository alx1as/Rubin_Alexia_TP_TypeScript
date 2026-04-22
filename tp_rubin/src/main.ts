import { getCurrentUser } from "./utils/auth";
import { goToAdminHome, goToClientHome, goToLogin } from "./utils/navigate";

function checkSession(): void {
    const user = getCurrentUser();
    const actualPath = window.location.pathname;

    const isLoginPage = actualPath.includes("login");
    const isRegisterPage = actualPath.includes("registro");
    const isIndexPage = actualPath === "/" || actualPath.includes("index.html");

    // si no hay sesión, dejo pasar solo páginas públicas
    if (!user && !isLoginPage && !isRegisterPage && !isIndexPage) {
        goToLogin();
        return;
    }

    // si es client y quiere entrar a admin, lo mando a su home
    if (user && user.role === "client" && actualPath.includes("/admin/")) {
        goToClientHome();
        return;
    }

    // si ya tiene sesión y entra a páginas públicas, lo mando a su home
    if (user && (isLoginPage || isRegisterPage || isIndexPage)) {
        if (user.role === "admin") {
            goToAdminHome();
        } else {
            goToClientHome();
        }
        return;
    }
}

checkSession();