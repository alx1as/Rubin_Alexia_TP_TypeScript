import { IUser } from "../types/IUser";

// obtiene el usuario actualmente logueado
export function getCurrentUser(): IUser | null {
    const userData = localStorage.getItem("userData");

    if (!userData) return null;

    try {
        return JSON.parse(userData) as IUser;
    } catch {
        return null;
    }
}

// guarda la sesión actual
export function saveSession(user: IUser): void {
    localStorage.setItem("userData", JSON.stringify(user));
}

// elimina la sesión
export function clearSession(): void {
    localStorage.removeItem("userData");
}

// devuelve true o false según haya usuario logueado
export function isAuthenticated(): boolean {
    return getCurrentUser() !== null;
}