import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica Mock solicitada
    if (userId === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Invalid User ID or Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      {/* Link para voltar ao site principal já que não tem Header */}
      <button
        onClick={() => navigate("/")}
        className="text-slate-400 hover:text-white mb-8 text-sm transition-colors"
      >
        ← Back to website
      </button>

      <div className="w-full max-w-[400px] shadow-2xl rounded-xl overflow-hidden">
        {/* Top Blue Header */}
        <div className="bg-blue-600 py-8 text-center">
          <h1 className="text-white text-2xl font-bold tracking-wider">SIGN IN NOW</h1>
        </div>


        {/* Form Section - Light Blue Background */}
        <div className="bg-blue-400 p-8 space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
            />
          </div>

          <div className="flex items-center gap-2 text-white">
            <input type="checkbox" id="remember" className="w-4 h-4 rounded" />
            <label htmlFor="remember" className="text-sm cursor-pointer">Remember me</label>
          </div>

          {error && <p className="text-red-100 text-xs font-bold text-center bg-red-500/20 p-2 rounded">{error}</p>}
        </div>

        {/* Bottom Section - White Background */}
        <div className="bg-white p-8 space-y-4 text-center">
          <button
            onClick={handleLogin}
            className="w-full py-4 bg-[#1e4a8a] hover:bg-[#163a6e] text-white font-bold rounded-lg shadow-lg transition-all active:scale-95"
          >
            SIGN IN
          </button>
          <a href="#" className="inline-block text-blue-600 text-sm font-medium hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}