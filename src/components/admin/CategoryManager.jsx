import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaChevronDown,
  FaChevronUp,
  FaSave,
  FaTimes,
  FaGithub,
  FaGlobe,
  FaMusic,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import ProjectEditor from "./ProjectEditor";

const CategoryManager = ({ 
  data,
  addCategory,
  updateCategory,
  deleteCategory,
  reorderCategories,
  addProject,
  updateProject,
  deleteProject,
  reorderProjects,
  masterSkills,
}) => {

  const [expandedCategories, setExpandedCategories] = useState({});
  const [editingCategory, setEditingCategory] = useState(null);
  const [newCategoryForm, setNewCategoryForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // New category form state
  const [newCategory, setNewCategory] = useState({
    title: "",
    maxDisplayCount: 4,
  });

  // Edit category form state
  const [editForm, setEditForm] = useState({
    title: "",
    maxDisplayCount: 4,
  });

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleAddCategory = () => {
    if (newCategory.title.trim()) {
      const categoryData = {
        title: newCategory.title.trim(),
        maxDisplayCount: parseInt(newCategory.maxDisplayCount) || 4,
      };
      addCategory(categoryData);
      setNewCategory({ title: "", maxDisplayCount: 4 });
      setNewCategoryForm(false);
    }
  };

  const startEditCategory = (category) => {
    setEditingCategory(category.id);
    setEditForm({
      title: category.title,
      maxDisplayCount: category.maxDisplayCount,
    });
  };

  const handleUpdateCategory = () => {
    if (editForm.title.trim()) {
      updateCategory(editingCategory, {
        title: editForm.title.trim(),
        maxDisplayCount: parseInt(editForm.maxDisplayCount) || 4,
      });
      setEditingCategory(null);
      setEditForm({ title: "", maxDisplayCount: 4 });
    }
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category and all its projects?")) {
      deleteCategory(categoryId);
    }
  };

  const moveCategory = (categoryId, direction) => {
    const categories = [...data.categories].sort((a, b) => a.order - b.order);
    const currentIndex = categories.findIndex(cat => cat.id === categoryId);
    
    if (
      (direction === "up" && currentIndex > 0) ||
      (direction === "down" && currentIndex < categories.length - 1)
    ) {
      const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
      const reorderedCategories = [...categories];
      
      // Swap the categories
      [reorderedCategories[currentIndex], reorderedCategories[newIndex]] = 
      [reorderedCategories[newIndex], reorderedCategories[currentIndex]];
      
      reorderCategories(reorderedCategories);
    }
  };

  if (!data) return <div>Loading...</div>;

  const sortedCategories = [...data.categories].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Project Categories</h2>
        <button
          onClick={() => setNewCategoryForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <FaPlus />
          <span>Add Category</span>
        </button>
      </div>

      {/* Add Category Form */}
      <AnimatePresence>
        {newCategoryForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-slate-900 border border-slate-700 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Add New Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category Title
                </label>
                <input
                  type="text"
                  value={newCategory.title}
                  onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
                  placeholder="e.g., Web Development"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Max Display Count
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={newCategory.maxDisplayCount}
                  onChange={(e) => setNewCategory({ ...newCategory, maxDisplayCount: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleAddCategory}
                className="flex items-center space-x-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
              >
                <FaSave />
                <span>Save</span>
              </button>
              <button
                onClick={() => setNewCategoryForm(false)}
                className="flex items-center space-x-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
              >
                <FaTimes />
                <span>Cancel</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories List */}
      <div className="space-y-4">
        {sortedCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            isExpanded={expandedCategories[category.id]}
            onToggle={() => toggleCategory(category.id)}
            onEdit={() => startEditCategory(category)}
            onDelete={() => handleDeleteCategory(category.id)}
            onMoveUp={() => moveCategory(category.id, "up")}
            onMoveDown={() => moveCategory(category.id, "down")}
            canMoveUp={index > 0}
            canMoveDown={index < sortedCategories.length - 1}
            isEditing={editingCategory === category.id}
            editForm={editForm}
            setEditForm={setEditForm}
            onSaveEdit={handleUpdateCategory}
            onCancelEdit={() => setEditingCategory(null)}
            onSelectProject={setSelectedProject}
            addProject={addProject}
            updateProject={updateProject}
            deleteProject={deleteProject}
            reorderProjects={reorderProjects}
            masterSkills={masterSkills}
          />
        ))}
      </div>

      {/* Project Editor/Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          selectedProject.isEdit ? (
            <ProjectEditModal
              project={selectedProject.project}
              categoryId={selectedProject.categoryId}
              onClose={() => setSelectedProject(null)}
              updateProject={updateProject}
              masterSkills={masterSkills}
            />
          ) : (
            <ProjectPreviewModal
              project={selectedProject.project}
              onClose={() => setSelectedProject(null)}
            />
          )
        )}
      </AnimatePresence>
    </div>
  );
};

const CategoryCard = ({
  category,
  isExpanded,
  onToggle,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
  isEditing,
  editForm,
  setEditForm,
  onSaveEdit,
  onCancelEdit,
  onSelectProject,
  addProject,
  updateProject,
  deleteProject,
  reorderProjects,
  masterSkills,
}) => {
  return (
    <div className="bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
      {/* Category Header */}
      <div className="p-4">
        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category Title
              </label>
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Max Display Count
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={editForm.maxDisplayCount}
                onChange={(e) => setEditForm({ ...editForm, maxDisplayCount: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex space-x-2 md:col-span-2">
              <button
                onClick={onSaveEdit}
                className="flex items-center space-x-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
              >
                <FaSave />
                <span>Save</span>
              </button>
              <button
                onClick={onCancelEdit}
                className="flex items-center space-x-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
              >
                <FaTimes />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={onToggle}
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
              >
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </button>
              <span className="text-sm text-gray-400">
                {category.projects.length} projects • Show {category.maxDisplayCount} max
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              {canMoveUp && (
                <button
                  onClick={onMoveUp}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Move Up"
                >
                  <FaChevronUp />
                </button>
              )}
              {canMoveDown && (
                <button
                  onClick={onMoveDown}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Move Down"
                >
                  <FaChevronDown />
                </button>
              )}
              <button
                onClick={onEdit}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                title="Edit Category"
              >
                <FaEdit />
              </button>
              <button
                onClick={onDelete}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                title="Delete Category"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Projects List */}
      <AnimatePresence>
        {isExpanded && !isEditing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-700"
          >
            <ProjectEditor
              categoryId={category.id}
              projects={category.projects}
              onSelectProject={onSelectProject}
              isInline={true}
              addProject={addProject}
              updateProject={updateProject}
              deleteProject={deleteProject}
              reorderProjects={reorderProjects}
              masterSkills={masterSkills}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Project Preview Modal - shows how the project looks in UniversalModal
const ProjectPreviewModal = ({ project, onClose }) => {
  // Render safe content without JSX
  const renderSafeContent = (content) => {
    if (typeof content === "string" || typeof content === "number") {
      return content;
    }
    return null;
  };

  // Helper function to extract YouTube video ID
  const extractYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const renderSkills = (icons) => {
    if (!Array.isArray(icons)) return null;
    return icons
      .filter((icon) => icon && typeof icon.name === "string")
      .map((icon, index) => (
        <div
          key={index}
          className="bg-gray-100 text-black px-2 py-1 rounded text-sm"
        >
          {icon.name}
        </div>
      ));
  };

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
            <h2 className="text-2xl font-bold text-white">Project Preview</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          {/* ModalContentArea equivalent */}
          <div className="modal-content relative bg-gray-700 p-8 rounded shadow-lg overflow-y-auto">
            {project ? (
              <div>
                <div className="flex items-start justify-between mb-6 pr-16">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">
                      {renderSafeContent(project.title) || "Untitled Project"}
                    </h2>
                    <p className="text-2xl text-gray-400">
                      {renderSafeContent(project.role) || "No role specified"}
                    </p>
                  </div>
                  
                  {project.buttons && project.buttons.length > 0 && (
                    <div className="flex flex-col gap-2 items-center">
                      {project.buttons.map((button, index) => {
                        const iconData = BUTTON_ICONS.find(i => i.value === button.icon);
                        return (
                          <a
                            key={index}
                            href={button.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                          >
                            {iconData && iconData.icon}
                            <span>{button.title}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <p className="m-4">
                  {renderSafeContent(project.description) || "No description available"}
                </p>

                {/* YouTube Video Embed */}
                {project.youtubeUrl && extractYouTubeVideoId(project.youtubeUrl) && (
                  <div className="mb-6">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                      <iframe
                        src={`https://www.youtube.com/embed/${extractYouTubeVideoId(project.youtubeUrl)}`}
                        title={`${project.title} - Video`}
                        allowFullScreen
                        className="w-full h-full rounded-xl"
                        style={{ minHeight: '315px' }}
                      />
                    </div>
                  </div>
                )}

                {/* Custom HTML/Embed Content */}
                {project.customHtml && (
                  <div className="mb-6">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                      <div 
                        className="custom-html-content w-full h-full"
                        style={{ minHeight: "315px" }}
                        dangerouslySetInnerHTML={{ __html: project.customHtml }}
                      />
                    </div>
                  </div>
                )}

                {/* Display multiple images or fallback to single img */}
                {project.images && project.images.length > 0 ? (
                  <div className="mb-4 space-y-4">
                    {project.images.filter(img => img && img.trim()).map((image, index) => (
                      <div key={index} className="mb-4">
                        <img
                          src={image}
                          alt={`${project.title || "Project"} - Image ${index + 1}`}
                          className="rounded-lg max-w-full h-auto max-h-80 object-contain mx-auto"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : project.img && typeof project.img === "string" && (
                  <div className="mb-4">
                    <img
                      src={project.img}
                      alt={project.title || "Project image"}
                      className="rounded-lg max-w-full h-auto max-h-80 object-contain mx-auto"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {project.icons && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-white font-semibold mr-2">
                      Technologies:
                    </span>
                    {renderSkills(project.icons)}
                  </div>
                )}


                <div className="mt-4 p-4 bg-gray-600 rounded">
                  <p className="text-sm text-gray-300">
                    Note: Media content (videos/galleries) is not available in this
                    preview. Use the admin panel to add rich media content to projects.
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No project data available</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Available button icons
const BUTTON_ICONS = [
  { name: 'GitHub', icon: <FaGithub />, value: 'github' },
  { name: 'Website', icon: <FaGlobe />, value: 'globe' },
  { name: 'Music', icon: <FaMusic />, value: 'music' },
  { name: 'YouTube', icon: <FaYoutube />, value: 'youtube' },
  { name: 'Instagram', icon: <FaInstagram />, value: 'instagram' },
];

// Project Edit Modal with form and preview
const ProjectEditModal = ({ project, categoryId, onClose, updateProject, masterSkills }) => {
  // Helper function to extract YouTube video ID
  const extractYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const [formData, setFormData] = React.useState({
    title: project?.title || "",
    role: project?.role || "",
    description: project?.description || "",
    img: project?.img || "",
    thumbnail: project?.thumbnail || "",
    images: project?.images || [],
    youtubeUrl: project?.youtubeUrl || "",
    customHtml: project?.customHtml || "",
    buttons: project?.buttons || [],
    icons: project?.icons || [],
  });

  React.useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        role: project.role || "",
        description: project.description || "",
        img: project.img || "",
        thumbnail: project.thumbnail || "",
        images: project.images || [],
        youtubeUrl: project.youtubeUrl || "",
        customHtml: project.customHtml || "",
        buttons: project.buttons || [],
        icons: project.icons || [],
      });
    }
  }, [project]);

  const handleSave = () => {
    const projectData = {
      title: formData.title,
      role: formData.role,
      description: formData.description,
      img: formData.img,
      thumbnail: formData.thumbnail,
      images: formData.images,
      youtubeUrl: formData.youtubeUrl,
      customHtml: formData.customHtml,
      element: null, // We'll keep this simple for now
      element2: null,
      icons: formData.icons,
      buttons: formData.buttons,
      id: project.id, // Important: keep the original ID
    };

    updateProject(categoryId, project.id, projectData);
    onClose();
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

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-slate-950 rounded-xl border border-slate-700 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Edit Project</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Edit Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Edit Details</h3>
              
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Project description..."
                />
              </div>

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

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  YouTube Video URL
                </label>
                <input
                  type="url"
                  value={formData.youtubeUrl}
                  onChange={(e) => updateField("youtubeUrl", e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
                <p className="text-xs text-gray-400 mt-1">
                  Will display as embedded video above images in project modal
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Custom HTML/Embed Code
                </label>
                <textarea
                  value={formData.customHtml}
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

              {/* Project Buttons */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Buttons (Max 3)
                </label>
                <div className="space-y-2">
                  {formData.buttons && formData.buttons.map((button, index) => (
                    <div key={index} className="flex gap-2 items-center">
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
                        className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                  {formData.buttons.length < 3 && (
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

              {/* Technologies/Skills Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Technologies Used
                </label>
                <TechnologySelector
                  selectedSkills={formData.icons || []}
                  availableSkills={masterSkills}
                  onChange={(skills) => setFormData(prev => ({ ...prev, icons: skills }))}
                />
              </div>

              <div className="flex space-x-2 pt-4">
                <button
                  onClick={handleSave}
                  disabled={!formData.title || !formData.role || !formData.description}
                  className="flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded transition-colors"
                >
                  <FaSave />
                  <span>Save Changes</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex items-center space-x-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
              </div>
            </div>

            {/* Live Preview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Live Preview</h3>
              <div className="bg-gray-700 p-4 rounded-lg border border-slate-600">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-white">
                      {formData.title || "Untitled Project"}
                    </h2>
                    <p className="text-xl text-gray-400">
                      {formData.role || "No role specified"}
                    </p>
                  </div>
                  
                  {formData.buttons && formData.buttons.length > 0 && (
                    <div className="flex flex-col gap-2 items-center">
                      {formData.buttons.map((button, index) => {
                        const iconData = BUTTON_ICONS.find(i => i.value === button.icon);
                        return (
                          <a
                            key={index}
                            href={button.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                          >
                            {iconData && iconData.icon}
                            <span>{button.title}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">
                  {formData.description || "No description available"}
                </p>

                {/* YouTube Video Embed Preview */}
                {formData.youtubeUrl && extractYouTubeVideoId(formData.youtubeUrl) && (
                  <div className="mb-4">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${extractYouTubeVideoId(formData.youtubeUrl)}`}
                        title="Video Preview"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                        style={{ minHeight: '200px' }}
                      />
                    </div>
                  </div>
                )}

                {/* Custom HTML/Embed Content Preview */}
                {formData.customHtml && (
                  <div className="mb-4">
                    <div className="border border-yellow-500 border-dashed rounded-lg p-2 mb-2">
                      <p className="text-yellow-500 text-xs mb-2">Custom HTML Preview (Live preview may not show all interactive content):</p>
                      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                        <div 
                          className="custom-html-content w-full h-full"
                          style={{ minHeight: "200px" }}
                          dangerouslySetInnerHTML={{ __html: formData.customHtml }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Display multiple images or fallback to single img */}
                {formData.images && formData.images.length > 0 ? (
                  <div className="mb-4 space-y-4">
                    {formData.images.filter(img => img && img.trim()).map((image, index) => (
                      <div key={index} className="mb-4">
                        <img
                          src={image}
                          alt={`${formData.title || "Project"} - Image ${index + 1}`}
                          className="rounded-lg max-w-full h-auto max-h-60 object-contain mx-auto"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : formData.img && (
                  <div className="mb-4">
                    <img
                      src={formData.img}
                      alt={formData.title || "Project image"}
                      className="rounded-lg max-w-full h-auto max-h-60 object-contain mx-auto"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {formData.icons && formData.icons.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-white font-semibold mr-2">
                      Technologies:
                    </span>
                    {formData.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 text-black px-2 py-1 rounded text-sm"
                      >
                        {icon.name}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Technology Skills Selector Component
const TechnologySelector = ({ selectedSkills, availableSkills, onChange }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
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
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search technologies..."
        className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />
      
      <div className="max-h-32 overflow-y-auto border border-slate-600 rounded p-2 bg-slate-800">
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

export default CategoryManager;