import { IUser } from "../types/IUser";

export function getCurrentUser(): IUser | null {
    const userData = localStorage.getItem("userData");

    if (!userData) return null;

    try {
        return JSON.parse(userData) as IUser;
    } catch {
        return null;
    }
}

export function saveSession(user: IUser): void {
    localStorage.setItem("userData", JSON.stringify(user));
}

export function clearSession(): void {
    localStorage.removeItem("userData");
}

export function isAuthenticated(): boolean {
    return getCurrentUser() !== null;
}