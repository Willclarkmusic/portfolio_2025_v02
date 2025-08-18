import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem("portfolio_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    
    if (password === correctPassword) {
      sessionStorage.setItem("portfolio_admin_auth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password. Please try again.");
      setPassword("");
    }
  };

  // If authenticated, redirect to admin page
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-950 p-8 rounded-xl border border-slate-700 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4"
          >
            <FaLock className="text-white text-2xl" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-gray-400">Enter password to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-600 bg-opacity-20 border border-red-600 rounded-lg p-3 text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Access Admin Panel
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Back to Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;