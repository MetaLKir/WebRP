import axios from "axios";

export const storeApi = axios.create({
    baseURL: "https://fakestoreapi.com",
})

export interface LoginRequest {
    username: string,
    password: string,
}

export interface LoginResponse {
    token: string,
}

export const login =
    async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    const res =
        await storeApi.post<LoginResponse>("/auth/login", loginRequest);
    return res.data;

}