import { UserData } from "./response";

export interface Auth {
    isAuthenticated: boolean;
    user: UserData;
}
