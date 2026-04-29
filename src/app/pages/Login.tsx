import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../api/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await api.post("/auth/token", {
        username: username,
        password: password
      });

      const token = typeof response.data === 'string'
        ? response.data
        : (response.data.token || response.data.accessToken);

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        setError("Token not found in server response");
      }

    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <button onClick={() => navigate("/")} className="text-slate-400 hover:text-white mb-8 text-sm">
        ← Back to website
      </button>

      <div className="w-full max-w-[400px] shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-blue-600 py-8 text-center">
          <h1 className="text-white text-2xl font-bold tracking-wider">SIGN IN NOW</h1>
        </div>

        <form onSubmit={handleLogin} className="bg-blue-400 p-8 space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-200"
            required
          />

          {error && <p className="text-red-100 text-xs font-bold text-center bg-red-500/20 p-2 rounded">{error}</p>}

          <div className="bg-white/90 p-1 rounded-lg">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#1e4a8a] hover:bg-[#163a6e] text-white font-bold rounded-lg shadow-lg disabled:opacity-50"
            >
              {isLoading ? "AUTHENTICATING..." : "SIGN IN"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}