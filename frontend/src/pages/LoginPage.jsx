import { useState } from "react";
import { login } from "../auth/authService";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); 

    async function handleLogin(event) {
        event.preventDefault();

        const { data, error } = await login(email, password);

        if(error) {
            setMessage(error.message);
            return;
        }

        console.log("Login data:", data);
        setMessage("Logged in succesfully");
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email" />

                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password" />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;