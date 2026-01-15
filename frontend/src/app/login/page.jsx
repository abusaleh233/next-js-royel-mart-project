"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "admin@example.com" && password === "123456") {

            document.cookie = "auth=true; path=/";
             window.location.href = "/items";

        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md border rounded p-6 shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border px-4 py-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border px-4 py-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="w-full bg-black text-white py-2 rounded">
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center">
                    Use: admin@example.com / 123456
                </p>
            </div>
        </div>
    );
}
