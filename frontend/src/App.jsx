
import { useState } from "react";
import axios from "axios";

function App() {
    // Signup states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                firstName,
                lastName,
                username,
                email,
                phoneNumber,
                password
            };

            const res = await axios.post(
                "http://localhost:3000/api/auth/register",
                payload,
                {
                    withCredentials: true
                }
            );

            console.log("Signup Success:", res.data);

        } catch (err) {
            console.log(
                "Signup Error:",
                err.response?.data || err.message
            );
        }
    };

    return (
        <div>
            <h2>Signup</h2>

            <form onSubmit={handleSignup}>
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <br />

                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <br />

                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <br />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br />

                <label>Phone Number</label>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <br />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <br />

                <button type="submit">
                    Signup
                </button>
            </form>
        </div>
    );
}

export default App;