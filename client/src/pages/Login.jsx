import study from "../assets/Study.png";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

function Login() {
  console.log("Login rendered");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("api/auth/login", {
        email,
        password,
      });

      login(res.data.user, res.data.token);

      // Force next render AFTER state updates
      setTimeout(() => {
        navigate("/dashboard");
      }, 0);
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-softBg flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 bg-white shadow-soft rounded-2xl overflow-hidden max-w-5xl w-full">
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-pastelPurple/20 to-pastelPink/20 p-10">
          <img
            src={study}
            alt="Study Illustration"
            className="w-72 mb-6 animate-fadeIn"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            Build Your Study Flow
          </h2>
          <p className="text-softGray text-sm mt-2 text-center">
            Stay consistent. Stay focused. Track your growth.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">Sign In</h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm text-softGray mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-softGray mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pastelPurple text-white py-3 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-sm text-softGray mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-pastelPurple font-medium">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
