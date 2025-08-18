// Data management utilities for localStorage operations
import {
  ProjectsData,
  moreProjectsData,
  GamesData,
  moreGamesData,
  EventsData,
  FrontEndIcons,
  BackEndIcons,
  OtherTechIcons,
  OtherOtherIcons,
  WorkExperiences,
} from "../components/Content";

const STORAGE_KEY = "portfolio_admin_data";
const VERSION_KEY = "portfolio_data_version";
const CURRENT_VERSION = "1.3";

// Add unique IDs to imported projects and handle JSX elements
const addIdsToProjects = (projects) => {
  return projects.map((project, index) => {
    // Process icons to remove JSX elements but keep names
    const safeIcons = Array.isArray(project.icons) 
      ? project.icons.map(icon => ({
          name: typeof icon?.name === 'string' ? icon.name : 'Unknown',
          // Remove icon JSX element completely
        }))
      : [];

    const processedProject = {
      title: typeof project.title === 'string' ? project.title : "",
      role: typeof project.role === 'string' ? project.role : "",
      description: typeof project.description === 'string' ? project.description : "",
      img: typeof project.img === 'string' ? project.img : "",
      icons: safeIcons,
      id: project.id || `project-${Date.now()}-${index}`,
    };
    
    // Completely exclude element and element2 to avoid any JSX serialization issues
    // These will be handled by the ProjectEditor when creating new projects
    
    return processedProject;
  });
};

// Default data structure
const getDefaultData = () => ({
  version: CURRENT_VERSION,
  categories: [
    {
      id: "programming-projects",
      title: "Programming Projects",
      maxDisplayCount: 4,
      order: 0,
      projects: addIdsToProjects([...ProjectsData, ...moreProjectsData]),
    },
    {
      id: "real-time",
      title: "Real-Time",
      maxDisplayCount: 4,
      order: 1,
      projects: addIdsToProjects([...GamesData, ...moreGamesData]),
    },
    {
      id: "event-tech",
      title: "Event Tech",
      maxDisplayCount: 4,
      order: 2,
      projects: addIdsToProjects([...EventsData]),
    },
  ],
  masterSkills: [
    ...FrontEndIcons.map((skill, index) => ({
      name: skill.name,
      icon: skill.icon,
      id: `frontend-${index}`, 
      category: "Frontend"
    })),
    ...BackEndIcons.map((skill, index) => ({
      name: skill.name,
      icon: skill.icon,
      id: `backend-${index}`, 
      category: "Backend"
    })),
    ...OtherTechIcons.map((skill, index) => ({
      name: skill.name,
      icon: skill.icon,
      id: `other-${index}`, 
      category: "Other Tech"
    })),
    ...OtherOtherIcons.map((skill, index) => ({
      name: skill.name,
      icon: skill.icon,
      id: `personal-${index}`, 
      category: "Personal"
    })),
  ],
  aboutData: {
    workExperiences: WorkExperiences,
    // Placeholder for future about section editing
  },
});

// Initialize data - run migration if needed
export const initializeData = () => {
  const existingVersion = localStorage.getItem(VERSION_KEY);
  const existingData = localStorage.getItem(STORAGE_KEY);

  // Force re-migration to fix JSX serialization issues
  if (!existingData || !existingVersion || existingVersion !== CURRENT_VERSION) {
    // First time or version upgrade - migrate data
    const defaultData = getDefaultData();
    saveData(defaultData);
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    console.log("Portfolio data initialized/migrated successfully");
    return defaultData;
  }

  try {
    return JSON.parse(existingData);
  } catch (error) {
    console.error("Error parsing stored data, resetting to defaults:", error);
    const defaultData = getDefaultData();
    saveData(defaultData);
    return defaultData;
  }
};

// Helper function to strip JSX from data before saving
const stripJSXFromData = (data) => {
  const cleanData = { ...data };
  
  // Clean categories and projects
  if (cleanData.categories) {
    cleanData.categories = cleanData.categories.map(category => ({
      ...category,
      projects: category.projects.map(project => ({
        ...project,
        // Strip JSX from project icons but keep the name
        icons: Array.isArray(project.icons) ? project.icons.map(icon => ({
          name: icon.name,
          // Don't save icon JSX
        })) : [],
        // Remove any JSX elements
        element: undefined,
        element2: undefined,
      }))
    }));
  }
  
  // Strip JSX from masterSkills too, but keep the structure
  if (cleanData.masterSkills) {
    cleanData.masterSkills = cleanData.masterSkills.map(skill => ({
      name: skill.name,
      id: skill.id,
      category: skill.category,
      // Don't save the icon JSX element
    }));
  }
  
  return cleanData;
};

// Load data and restore icons from Content.jsx
export const loadData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) {
      return initializeData();
    }
    
    const data = JSON.parse(savedData);
    
    // Restore icons to masterSkills from Content.jsx
    if (data.masterSkills) {
      // Create a map of all available icons
      const allSkillsWithIcons = [
        ...FrontEndIcons,
        ...BackEndIcons, 
        ...OtherTechIcons,
        ...OtherOtherIcons
      ];
      
      // Restore icons by matching names
      data.masterSkills = data.masterSkills.map(skill => {
        const iconData = allSkillsWithIcons.find(s => s.name === skill.name);
        return {
          ...skill,
          icon: iconData ? iconData.icon : null
        };
      });
    }
    
    return data;
  } catch (error) {
    console.error("Error loading data from localStorage:", error);
    return initializeData();
  }
};

// Save data to localStorage
export const saveData = (data) => {
  try {
    const cleanedData = stripJSXFromData(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanedData));
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    return true;
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
    return false;
  }
};


// Category management functions
export const addCategory = (data, newCategory) => {
  const maxOrder = Math.max(...data.categories.map(cat => cat.order), -1);
  const category = {
    id: newCategory.id || `category-${Date.now()}`,
    title: newCategory.title,
    maxDisplayCount: newCategory.maxDisplayCount || 4,
    order: maxOrder + 1,
    projects: [],
  };
  
  const updatedData = {
    ...data,
    categories: [...data.categories, category],
  };
  
  saveData(updatedData);
  return updatedData;
};

export const updateCategory = (data, categoryId, updates) => {
  const updatedData = {
    ...data,
    categories: data.categories.map(cat =>
      cat.id === categoryId ? { ...cat, ...updates } : cat
    ),
  };
  
  saveData(updatedData);
  return updatedData;
};

export const deleteCategory = (data, categoryId) => {
  const updatedData = {
    ...data,
    categories: data.categories.filter(cat => cat.id !== categoryId),
  };
  
  saveData(updatedData);
  return updatedData;
};

export const reorderCategories = (data, newOrder) => {
  const updatedData = {
    ...data,
    categories: newOrder.map((cat, index) => ({ ...cat, order: index })),
  };
  
  saveData(updatedData);
  return updatedData;
};

// Project management functions
export const addProject = (data, categoryId, newProject) => {
  const project = {
    id: newProject.id || `project-${Date.now()}`,
    ...newProject,
  };
  
  const updatedData = {
    ...data,
    categories: data.categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, projects: [...cat.projects, project] }
        : cat
    ),
  };
  
  saveData(updatedData);
  return updatedData;
};

export const updateProject = (data, categoryId, projectId, updates) => {
  const updatedData = {
    ...data,
    categories: data.categories.map(cat =>
      cat.id === categoryId
        ? {
            ...cat,
            projects: cat.projects.map(proj =>
              proj.id === projectId ? { ...proj, ...updates } : proj
            ),
          }
        : cat
    ),
  };
  
  saveData(updatedData);
  return updatedData;
};

export const deleteProject = (data, categoryId, projectId) => {
  const updatedData = {
    ...data,
    categories: data.categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, projects: cat.projects.filter(proj => proj.id !== projectId) }
        : cat
    ),
  };
  
  saveData(updatedData);
  return updatedData;
};

export const reorderProjects = (data, categoryId, newProjectOrder) => {
  const updatedData = {
    ...data,
    categories: data.categories.map(cat =>
      cat.id === categoryId ? { ...cat, projects: newProjectOrder } : cat
    ),
  };
  
  saveData(updatedData);
  return updatedData;
};

// Skills management functions
export const addSkill = (data, newSkill) => {
  const skill = {
    id: newSkill.id || `skill-${Date.now()}`,
    ...newSkill,
  };
  
  const updatedData = {
    ...data,
    masterSkills: [...data.masterSkills, skill],
  };
  
  saveData(updatedData);
  return updatedData;
};

export const updateSkill = (data, skillId, updates) => {
  const updatedData = {
    ...data,
    masterSkills: data.masterSkills.map(skill =>
      skill.id === skillId ? { ...skill, ...updates } : skill
    ),
  };
  
  saveData(updatedData);
  return updatedData;
};

export const deleteSkill = (data, skillId) => {
  const updatedData = {
    ...data,
    masterSkills: data.masterSkills.filter(skill => skill.id !== skillId),
  };
  
  saveData(updatedData);
  return updatedData;
};

// Export/Import functions
export const exportData = () => {
  const data = loadData();
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `portfolio-data-${new Date().toISOString().split("T")[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

export const importData = (jsonData) => {
  try {
    const data = JSON.parse(jsonData);
    // Validate data structure here if needed
    saveData(data);
    return true;
  } catch (error) {
    console.error("Error importing data:", error);
    return false;
  }
};

// Utility function to generate unique IDs
export const generateId = (prefix = "item") => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Utility function to clear localStorage and force re-migration
export const clearStorageAndReinitialize = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(VERSION_KEY);
  return initializeData();
};