import { useState, useEffect, useCallback } from "react";
import {
  initializeData,
  loadData,
  addCategory,
  updateCategory,
  deleteCategory,
  reorderCategories,
  addProject,
  updateProject,
  deleteProject,
  reorderProjects,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../utils/dataManager";

export const useProjectData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize data on first load
  useEffect(() => {
    const initialData = initializeData();
    setData(initialData);
    setLoading(false);
  }, []);

  // Reload data from localStorage
  const refreshData = useCallback(() => {
    setData(loadData());
  }, []);

  // Category management functions
  const handleAddCategory = useCallback((newCategory) => {
    const updatedData = addCategory(data, newCategory);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleUpdateCategory = useCallback((categoryId, updates) => {
    const updatedData = updateCategory(data, categoryId, updates);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleDeleteCategory = useCallback((categoryId) => {
    const updatedData = deleteCategory(data, categoryId);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleReorderCategories = useCallback((newOrder) => {
    const updatedData = reorderCategories(data, newOrder);
    setData(updatedData);
    return updatedData;
  }, [data]);

  // Project management functions
  const handleAddProject = useCallback((categoryId, newProject) => {
    const updatedData = addProject(data, categoryId, newProject);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleUpdateProject = useCallback((categoryId, projectId, updates) => {
    const updatedData = updateProject(data, categoryId, projectId, updates);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleDeleteProject = useCallback((categoryId, projectId) => {
    const updatedData = deleteProject(data, categoryId, projectId);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleReorderProjects = useCallback((categoryId, newProjectOrder) => {
    const updatedData = reorderProjects(data, categoryId, newProjectOrder);
    setData(updatedData);
    return updatedData;
  }, [data]);

  // Skills management functions
  const handleAddSkill = useCallback((newSkill) => {
    const updatedData = addSkill(data, newSkill);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleUpdateSkill = useCallback((skillId, updates) => {
    const updatedData = updateSkill(data, skillId, updates);
    setData(updatedData);
    return updatedData;
  }, [data]);

  const handleDeleteSkill = useCallback((skillId) => {
    const updatedData = deleteSkill(data, skillId);
    setData(updatedData);
    return updatedData;
  }, [data]);

  // Utility functions
  const getCategoryById = useCallback((categoryId) => {
    return data?.categories.find(cat => cat.id === categoryId);
  }, [data]);

  const getProjectById = useCallback((categoryId, projectId) => {
    const category = getCategoryById(categoryId);
    return category?.projects.find(proj => proj.id === projectId);
  }, [getCategoryById]);

  const getAllProjects = useCallback(() => {
    if (!data) return [];
    return data.categories.reduce((allProjects, category) => {
      return [...allProjects, ...category.projects];
    }, []);
  }, [data]);

  return {
    data,
    loading,
    refreshData,
    
    // Category operations
    addCategory: handleAddCategory,
    updateCategory: handleUpdateCategory,
    deleteCategory: handleDeleteCategory,
    reorderCategories: handleReorderCategories,
    
    // Project operations
    addProject: handleAddProject,
    updateProject: handleUpdateProject,
    deleteProject: handleDeleteProject,
    reorderProjects: handleReorderProjects,
    
    // Skills operations
    addSkill: handleAddSkill,
    updateSkill: handleUpdateSkill,
    deleteSkill: handleDeleteSkill,
    
    // Utility functions
    getCategoryById,
    getProjectById,
    getAllProjects,
  };
};