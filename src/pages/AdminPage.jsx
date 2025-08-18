import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSignOutAlt, FaProjectDiagram, FaUser, FaHome } from "react-icons/fa";
import { useProjectData } from "../hooks/useProjectData";
import CategoryManager from "../components/admin/CategoryManager";
import {
  exportData,
  importData,
  clearStorageAndReinitialize,
} from "../utils/dataManager";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { 
    data, 
    loading,
    addCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
    addProject,
    updateProject,
    deleteProject,
    reorderProjects,
  } = useProjectData();

  // Check authentication
  useEffect(() => {
    const auth = sessionStorage.getItem("portfolio_admin_auth");
    setIsAuthenticated(auth === "true");
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("portfolio_admin_auth");
    setIsAuthenticated(false);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const success = importData(e.target.result);
        if (success) {
          alert("Data imported successfully! Please refresh the page.");
          window.location.reload();
        } else {
          alert("Error importing data. Please check the file format.");
        }
      };
      reader.readAsText(file);
    }
  };

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-800">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-white">Portfolio Admin</h1>
              <nav className="flex space-x-1">
                <TabButton
                  active={activeTab === "projects"}
                  onClick={() => setActiveTab("projects")}
                  icon={<FaProjectDiagram />}
                  label="Projects"
                />
                <TabButton
                  active={activeTab === "about"}
                  onClick={() => setActiveTab("about")}
                  icon={<FaUser />}
                  label="About"
                />
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {/* Data Management */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={exportData}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                >
                  Export
                </button>
                <label className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded cursor-pointer transition-colors">
                  Import
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "This will clear all data and reinitialize from defaults. Are you sure?"
                      )
                    ) {
                      clearStorageAndReinitialize();
                      window.location.reload();
                    }
                  }}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"
                >
                  Reset Data
                </button>
              </div>

              {/* Navigation */}
              <a
                href="/"
                className="flex items-center space-x-1 px-3 py-1 text-gray-400 hover:text-white transition-colors"
              >
                <FaHome size={14} />
                <span className="text-sm">View Site</span>
              </a>

              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-3 py-1 text-gray-400 hover:text-white transition-colors"
              >
                <FaSignOutAlt size={14} />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "projects" && (
            <CategoryManager 
              data={data}
              addCategory={addCategory}
              updateCategory={updateCategory}
              deleteCategory={deleteCategory}
              reorderCategories={reorderCategories}
              addProject={addProject}
              updateProject={updateProject}
              deleteProject={deleteProject}
              reorderProjects={reorderProjects}
              masterSkills={data?.masterSkills || []}
            />
          )}
          {activeTab === "about" && <AboutManager />}
        </motion.div>
      </main>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-slate-800"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const AboutManager = () => (
  <div className="bg-slate-950 rounded-xl p-8 border border-slate-700">
    <h2 className="text-2xl font-bold text-white mb-4">
      About Section Management
    </h2>
    <p className="text-gray-400">
      About section editing functionality will be implemented in the next phase.
      This will include work experience editing, skills management, and personal
      information updates.
    </p>
  </div>
);

export default AdminPage;
