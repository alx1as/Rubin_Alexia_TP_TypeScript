/* 
pathname → ¿dónde estoy?
user → ¿quién soy?
href → ¿a dónde lo mando?
*/
import { getCurrentUser } from "./utils/auth";
import { goToAdminHome, goToClientHome, goToLogin } from "./utils/navigate";

function checkSession(): void {
    const user = getCurrentUser();
    const actualPath = window.location.pathname;

    const isLoginPage = actualPath.includes("login");
    const isRegisterPage = actualPath.includes("registro");

    if (!user && !isLoginPage && !isRegisterPage) {
        goToLogin();
        return;
    }

    if (user && user.role === "client" && actualPath.includes("/admin/")) {
        goToClientHome();
        return;
    }

    if (user && (isLoginPage || isRegisterPage)) {
        if (user.role === "admin") {
            goToAdminHome();
        } else {
            goToClientHome();
        }
        return;
    }
}

checkSession();