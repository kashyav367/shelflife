
import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                email,
                password
            };

            const res = await axios.post(
                "http://localhost:3000/api/auth/login",
                payload,
                {
                    withCredentials: true
                }
            );

            console.log("Login Successful:", res.data);

            alert("Login Successful!");

        } catch (err) {
            console.log(
                "Login Failed:",
                err.response?.data || err.message
            );

            alert(
                err.response?.data?.message || "Login Failed"
            );
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />

                <br /><br />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
