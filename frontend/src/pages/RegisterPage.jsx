import { useState } from "react";
import { register } from "../auth/authService";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleRegister(event) {
        event.preventDefault();

        const { data, error } = await register(email, password);

        if (error) {
            setMessage(error.message);
            return;
        }

        console.log("Register data:", data);
        setMessage("Registered. Check Supabase authentication users");
    }

    return (

        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;