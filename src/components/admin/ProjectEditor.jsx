import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaImage,
  FaLink,
  FaYoutube,
  FaTags,
  FaEye,
  FaGithub,
  FaGlobe,
  FaMusic,
  FaArrowUp,
  FaArrowDown,
  FaInstagram,
} from "react-icons/fa";

// Available button icons
const BUTTON_ICONS = [
  { name: 'GitHub', icon: <FaGithub />, value: 'github' },
  { name: 'Website', icon: <FaGlobe />, value: 'globe' },
  { name: 'Music', icon: <FaMusic />, value: 'music' },
  { name: 'YouTube', icon: <FaYoutube />, value: 'youtube' },
  { name: 'Instagram', icon: <FaInstagram />, value: 'instagram' },
];

const ProjectEditor = ({ 
  project, 
  categoryId, 
  projects, 
  isOpen, 
  onClose, 
  onSelectProject, 
  isInline = false,
  addProject,
  updateProject,
  deleteProject,
  reorderProjects,
  masterSkills = [],
}) => {

  const [editingProject, setEditingProject] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState(getEmptyProject());

  function getEmptyProject() {
    return {
      title: "",
      role: "",
      description: "",
      img: "", // Keep for backward compatibility
      thumbnail: "", // New thumbnail field
      images: [], // New multiple images array
      youtubeUrl: "", // YouTube video URL
      customHtml: "", // Custom HTML/embed code
      element: null,
      element2: null,
      icons: [],
      buttons: [],
    };
  }

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        role: project.role || "",
        description: project.description || "",
        img: project.img || "",
        thumbnail: project.thumbnail || "",
        images: project.images || [],
        youtubeUrl: project.youtubeUrl || extractYouTubeUrl(project.element) || "",
        customHtml: project.customHtml || "",
        buttons: project.buttons || [],
        icons: project.icons || [],
      });
    }
  }, [project]);

  const extractYouTubeUrl = (element) => {
    if (!element) return "";
    // Extract YouTube URL from iframe src
    const match = element.toString().match(/youtube\.com\/embed\/([^?&"]*)/);
    return match ? `https://www.youtube.com/watch?v=${match[1]}` : "";
  };

  const extractImages = (element) => {
    if (!element) return [];
    // Extract image URLs - this is a simplified implementation
    const imgMatches = element.toString().match(/src="([^"]*\.(jpg|jpeg|png|gif|webp))"/g);
    return imgMatches ? imgMatches.map(match => match.match(/src="([^"]*)"/)[1]) : [];
  };

  const extractLinks = (element2) => {
    if (!element2) return [];
    // Extract links from buttons - simplified implementation
    return [];
  };

  const handleSaveProject = () => {
    const projectData = {
      title: formData.title,
      role: formData.role,
      description: formData.description,
      img: formData.img,
      thumbnail: formData.thumbnail,
      images: formData.images,
      youtubeUrl: formData.youtubeUrl,
      customHtml: formData.customHtml,
      element: createElementFromData(formData),
      element2: createElement2FromData(formData),
      icons: formData.icons,
      buttons: formData.buttons,
    };

    if (editingProject) {
      updateProject(categoryId, editingProject, projectData);
      setEditingProject(null);
    } else {
      addProject(categoryId, projectData);
      setShowAddForm(false);
    }
    
    setFormData(getEmptyProject());
  };

  const createElementFromData = (data) => {
    // Create React element based on form data
    if (data.youtubeUrl) {
      const videoId = extractVideoId(data.youtubeUrl);
      if (videoId) {
        return (
          <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
              title="Project Video"
            />
          </div>
        );
      }
    }
    
    if (data.images && data.images.length > 0) {
      return (
        <div className="w-[93%] justify-center">
          <img
            src={data.images[0]}
            className="rounded-3xl object-contain"
            alt="Project"
          />
        </div>
      );
    }

    return null;
  };

  const createElement2FromData = (data) => {
    // Create buttons from links data
    if (!data.links || data.links.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2">
        {data.links.map((link, index) => (
          <button
            key={index}
            id="standbutton"
            onClick={() => window.open(link.url, "_blank")}
            className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          >
            <span className="p-2 text-white text-sm opacity-100 transition-all duration-300 ease-in-out">
              {link.label}
            </span>
            {link.icon}
          </button>
        ))}
      </div>
    );
  };

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(categoryId, projectId);
    }
  };

  const handleMoveProject = (projectIndex, direction) => {
    if (!projects || projects.length < 2) return;
    
    const newIndex = direction === "up" ? projectIndex - 1 : projectIndex + 1;
    
    // Check bounds
    if (newIndex < 0 || newIndex >= projects.length) return;
    
    // Create new array with swapped positions
    const reorderedProjects = [...projects];
    [reorderedProjects[projectIndex], reorderedProjects[newIndex]] = 
    [reorderedProjects[newIndex], reorderedProjects[projectIndex]];
    
    // Update project order in data
    reorderProjects(categoryId, reorderedProjects);
  };

  const addButton = () => {
    if (formData.buttons.length < 3) {
      setFormData(prev => ({
        ...prev,
        buttons: [...prev.buttons, { title: "", url: "", icon: "github" }]
      }));
    }
  };

  const updateButton = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      buttons: prev.buttons.map((button, i) => 
        i === index ? { ...button, [field]: value } : button
      )
    }));
  };

  const removeButton = (index) => {
    setFormData(prev => ({
      ...prev,
      buttons: prev.buttons.filter((_, i) => i !== index)
    }));
  };

  const addImage = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ""]
    }));
  };

  const updateImage = (index, value) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map((img, i) => 
        i === index ? value : img
      )
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // If this is a modal for editing a single project
  if (!isInline && isOpen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      >
        <div className="bg-slate-950 rounded-xl border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {project ? "Edit Project" : "Add Project"}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            <ProjectForm
              formData={formData}
              setFormData={setFormData}
              onSave={handleSaveProject}
              onCancel={onClose}
              masterSkills={masterSkills}
              addButton={addButton}
              updateButton={updateButton}
              removeButton={removeButton}
              addImage={addImage}
              updateImage={updateImage}
              removeImage={removeImage}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  // Inline project list for category management
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-white">Projects</h4>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
        >
          <FaPlus />
          <span>Add Project</span>
        </button>
      </div>

      {/* Add Project Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4"
          >
            <ProjectForm
              formData={formData}
              setFormData={setFormData}
              onSave={handleSaveProject}
              onCancel={() => {
                setShowAddForm(false);
                setFormData(getEmptyProject());
              }}
              masterSkills={masterSkills}
              compact={true}
              addButton={addButton}
              updateButton={updateButton}
              removeButton={removeButton}
              addImage={addImage}
              updateImage={updateImage}
              removeImage={removeImage}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects List */}
      <div className="space-y-2">
        {projects && projects.map((proj, index) => (
          <div
            key={proj.id || index}
            className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-600"
          >
            <div className="flex items-center space-x-3">
              {(proj.thumbnail || proj.img || (proj.images && proj.images[0])) && (
                <img
                  src={proj.thumbnail || proj.img || (proj.images && proj.images[0])}
                  alt={proj.title}
                  className="w-12 h-12 object-cover rounded"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <div>
                <h5 className="text-white font-medium">{proj.title}</h5>
                <p className="text-sm text-gray-400">{proj.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Move Up Arrow */}
              {index > 0 && (
                <button
                  onClick={() => handleMoveProject(index, "up")}
                  className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                  title="Move Up"
                >
                  <FaArrowUp />
                </button>
              )}
              
              {/* Move Down Arrow */}
              {index < projects.length - 1 && (
                <button
                  onClick={() => handleMoveProject(index, "down")}
                  className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                  title="Move Down"
                >
                  <FaArrowDown />
                </button>
              )}
              
              <button
                onClick={() => onSelectProject && onSelectProject({ project: proj, categoryId })}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                title="View Preview"
              >
                <FaEye />
              </button>
              <button
                onClick={() => onSelectProject && onSelectProject({ project: proj, categoryId, isEdit: true })}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                title="Edit Project"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDeleteProject(proj.id)}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                title="Delete"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        
        {(!projects || projects.length === 0) && (
          <p className="text-gray-400 text-center py-4">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
};

const ProjectForm = ({ 
  formData, 
  setFormData, 
  onSave, 
  onCancel, 
  masterSkills = [], 
  compact = false,
  addButton,
  updateButton,
  removeButton,
  addImage,
  updateImage,
  removeImage
}) => {
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Project name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Role *
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => updateField("role", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="e.g., Full-stack Developer"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => updateField("description", e.target.value)}
          rows={compact ? 2 : 4}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="Project description..."
          required
        />
      </div>

      {/* Thumbnail Image */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Thumbnail Image URL (for project card)
        </label>
        <input
          type="url"
          value={formData.thumbnail}
          onChange={(e) => updateField("thumbnail", e.target.value)}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="https://example.com/thumbnail.jpg"
        />
        <p className="text-xs text-gray-400 mt-1">
          If empty, will use first image from gallery below
        </p>
      </div>

      {/* Main Image (Legacy - keep for backward compatibility) */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Main Image URL (Legacy)
        </label>
        <input
          type="url"
          value={formData.img}
          onChange={(e) => updateField("img", e.target.value)}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {/* Project Images Gallery */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Project Images Gallery
        </label>
        <div className="space-y-2">
          {formData.images && formData.images.map((image, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="url"
                value={image}
                onChange={(e) => updateImage(index, e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => removeImage(index)}
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            onClick={addImage}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            <FaPlus />
            <span>Add Image</span>
          </button>
        </div>
      </div>

      {/* Media */}
      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            YouTube Video URL
          </label>
          <input
            type="url"
            value={formData.youtubeUrl || ""}
            onChange={(e) => updateField("youtubeUrl", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="https://www.youtube.com/watch?v=..."
          />
        </div>
      )}

      {/* Custom HTML/Embed Code */}
      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Custom HTML/Embed Code
          </label>
          <textarea
            value={formData.customHtml || ""}
            onChange={(e) => updateField("customHtml", e.target.value)}
            rows={6}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
            placeholder='<div className="overflow-hidden justify-center p-2">
  <div className="aspect-w-16 aspect-h-9 overflow-hidden justify-center rounded-xl">
    <iframe src="https://example.com/embed" allowFullScreen />
  </div>
</div>'
          />
          <p className="text-xs text-gray-400 mt-1">
            Custom HTML/JSX code that will display between YouTube video and images. Use for iframes, embeds, etc.
          </p>
        </div>
      )}

      {/* Project Buttons */}
      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Buttons (Max 3)
          </label>
          <div className="space-y-2">
            {formData.buttons && formData.buttons.map((button, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={button.title}
                  onChange={(e) => updateButton(index, "title", e.target.value)}
                  placeholder="Button text"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="url"
                  value={button.url}
                  onChange={(e) => updateButton(index, "url", e.target.value)}
                  placeholder="https://..."
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <select
                  value={button.icon}
                  onChange={(e) => updateButton(index, "icon", e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
                >
                  {BUTTON_ICONS.map(icon => (
                    <option key={icon.value} value={icon.value}>
                      {icon.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeButton(index)}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            {formData.buttons && formData.buttons.length < 3 && (
              <button
                onClick={addButton}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                <FaPlus />
                <span>Add Button</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Skills/Icons */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Technologies Used
        </label>
        <SkillSelector
          selectedSkills={formData.icons || []}
          availableSkills={masterSkills}
          onChange={(skills) => updateField("icons", skills)}
          compact={compact}
        />
      </div>

      {/* Form Actions */}
      <div className="flex space-x-2 pt-4 border-t border-slate-700">
        <button
          onClick={onSave}
          disabled={!formData.title || !formData.role || !formData.description}
          className="flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded transition-colors"
        >
          <FaSave />
          <span>Save</span>
        </button>
        <button
          onClick={onCancel}
          className="flex items-center space-x-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
        >
          <FaTimes />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};

const SkillSelector = ({ selectedSkills, availableSkills, onChange, compact = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredSkills = availableSkills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSkill = (skill) => {
    const isSelected = selectedSkills.some(s => s.name === skill.name);
    if (isSelected) {
      onChange(selectedSkills.filter(s => s.name !== skill.name));
    } else {
      onChange([...selectedSkills, skill]);
    }
  };

  return (
    <div className="space-y-2">
      {!compact && (
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search skills..."
          className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
      )}
      
      <div className={`${compact ? 'max-h-24' : 'max-h-32'} overflow-y-auto border border-slate-600 rounded p-2 bg-slate-800`}>
        <div className="flex flex-wrap gap-1">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkills.some(s => s.name === skill.name);
            return (
              <button
                key={skill.name}
                onClick={() => toggleSkill(skill)}
                className={`flex items-center space-x-1 px-2 py-1 rounded text-xs transition-colors ${
                  isSelected 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                }`}
              >
                {React.isValidElement(skill.icon) && skill.icon}
                <span>{skill.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          <span className="text-sm text-gray-400">Selected:</span>
          {selectedSkills.map((skill) => (
            <span
              key={skill.name}
              className="flex items-center space-x-1 px-2 py-1 bg-blue-600 text-white rounded text-xs"
            >
              {React.isValidElement(skill.icon) && skill.icon}
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectEditor;