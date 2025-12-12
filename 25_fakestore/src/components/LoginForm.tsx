import {type FC, type FormEvent, useState} from "react";
import {login} from "../api/storeApi.ts";
import {routesStorePage} from "../types_configs/routingConfig.ts";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
    // No idea what specific I should do with this
}

export const LoginForm:FC<LoginFormProps> = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ username, password });
            if (response?.token) {
                localStorage.setItem("token", response.token); // сохраняем сам токен
                navigate(routesStorePage.Items);
            } else {
                setError("Login response did not contain a token");
            }
        } catch (err) {
            setError(`Login failed: ${err}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">Fakestore Login</h2>

            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                />
            </div>

            <button type="submit" className="form-btn">Submit</button>

            {error && <p className="error-msg">{error}</p>}
        </form>
    );
};
