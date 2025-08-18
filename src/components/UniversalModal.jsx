import React from "react";
import {
  FaWindowClose,
  FaChevronDown,
  FaChevronRight,
  FaGithub,
  FaGlobe,
  FaMusic,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";
import { useProjectData } from "../hooks/useProjectData";

const UniversalModal = ({ isOpen, onClose, children, initialContent }) => {
  const { data } = useProjectData();
  const [selectedContent, setSelectedContent] = useState(null);
  const [expandedSections, setExpandedSections] = useState({ 0: true });

  // Get the first project as default
  React.useEffect(() => {
    if (data?.categories && data.categories.length > 0 && !selectedContent) {
      const firstCategory = data.categories.find(
        (cat) => cat.projects.length > 0
      );
      if (firstCategory && firstCategory.projects.length > 0) {
        setSelectedContent(firstCategory.projects[0]);
      }
    }
  }, [data, selectedContent]);

  // Update selected content when initialContent changes
  React.useEffect(() => {
    if (initialContent) {
      setSelectedContent(initialContent);
      // Find which section contains this content and expand it
      if (data?.categories) {
        data.categories.forEach((category, index) => {
          const foundItem = category.projects.find(
            (item) => item.title === initialContent.title
          );
          if (foundItem) {
            setExpandedSections((prev) => ({
              ...prev,
              [index]: true,
            }));
          }
        });
      }
    }
  }, [initialContent, data]);

  if (!isOpen) return null;

  // Create contentArray from dynamic data
  const contentArray = data?.categories
    ? data.categories
        .sort((a, b) => a.order - b.order)
        .map((category) => [category.projects, category.title])
    : [];

  const handleItemSelect = (item, sectionIndex) => {
    setSelectedContent(item);
    // Ensure the section containing the selected item is expanded
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: true,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 ">
      <div className="flex items-center justify-center z-50 max-w-[100%] md:max-w-[90%]">
        <ModalSidebar
          sidebarVisible={true}
          contentArray={contentArray}
          onItemSelect={handleItemSelect}
          selectedContent={selectedContent}
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        />
        <ModalContentArea selectedContent={selectedContent} onClose={onClose} />
      </div>
    </div>
  );
};

export default UniversalModal;

// Available button icons
const BUTTON_ICONS = {
  github: <FaGithub />,
  globe: <FaGlobe />,
  music: <FaMusic />,
  youtube: <FaYoutube />,
  instagram: <FaInstagram />,
};

const ModalContentArea = ({ selectedContent, onClose }) => {
  // Safe function to render only string/number content
  const renderSafeContent = (content) => {
    if (typeof content === "string" || typeof content === "number") {
      return content;
    }
    return null;
  };

  // Helper function to extract YouTube video ID
  const extractYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    );
    return match ? match[1] : null;
  };

  // Safe function to render skills without JSX icons
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
    <div className="modal-content relative bg-gray-700 p-8 rounded max-w-6xl max-h-[100vh] md:min-h-[80vh] md:max-h-[80vh] overflow-y-auto">
      {selectedContent ? (
        <div>
          <div className="flex items-start justify-between mb-6 pr-16">
            <button
              className="static p-4 md:fixed right-24 top-24 text-white z-50"
              onClick={onClose}
            >
              <FaWindowClose className="text-4xl" />
              <span className="sr-only">Close Modal</span>
            </button>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">
                {renderSafeContent(selectedContent.title) || "Untitled Project"}
              </h2>
              <p className="text-2xl text-gray-400">
                {renderSafeContent(selectedContent.role) || "No role specified"}
              </p>
            </div>

            {selectedContent.buttons && selectedContent.buttons.length > 0 && (
              <div className="flex flex-col gap-2 items-center">
                {selectedContent.buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border-[1px]"
                  >
                    {BUTTON_ICONS[button.icon]}
                    <span>{button.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <p className="m-4">
            {renderSafeContent(selectedContent.description) ||
              "No description available"}
          </p>

          {/* YouTube Video Embed */}
          {selectedContent.youtubeUrl &&
            extractYouTubeVideoId(selectedContent.youtubeUrl) && (
              <div className="mb-6">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                      selectedContent.youtubeUrl
                    )}`}
                    title={`${selectedContent.title} - Video`}
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                    style={{ minHeight: "315px" }}
                  />
                </div>
              </div>
            )}

          {/* Custom HTML/Embed Content */}
          {selectedContent.customHtml && (
            <div className="mb-6">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                <div 
                  className="custom-html-content w-full h-full"
                  style={{ minHeight: "315px" }}
                  dangerouslySetInnerHTML={{ __html: selectedContent.customHtml }}
                />
              </div>
            </div>
          )}

          {/* Display multiple images or fallback to single img */}
          {selectedContent.images && selectedContent.images.length > 0 ? (
            <div className="mb-4 space-y-4">
              {selectedContent.images
                .filter((img) => img && img.trim())
                .map((image, index) => (
                  <div key={index} className="mb-4">
                    <img
                      src={image}
                      alt={`${selectedContent.title || "Project"} - Image ${
                        index + 1
                      }`}
                      className="rounded-lg max-w-full h-auto max-h-96 object-contain mx-auto"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                ))}
            </div>
          ) : (
            selectedContent.img &&
            typeof selectedContent.img === "string" && (
              <div className="mb-4">
                <img
                  src={selectedContent.img}
                  alt={selectedContent.title || "Project image"}
                  className="rounded-lg max-w-full h-auto max-h-96 object-contain mx-auto"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )
          )}

          {selectedContent.icons && (
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-white font-semibold mr-2">
                Technologies:
              </span>
              {renderSkills(selectedContent.icons)}
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500">
          Select an item from the sidebar to view details
        </p>
      )}
    </div>
  );
};
const ModalSidebar = ({
  sidebarVisible,
  contentArray,
  onItemSelect,
  selectedContent,
  expandedSections,
  setExpandedSections,
}) => {
  if (!sidebarVisible) return null;

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  return (
    <div className="modal-sidebar hidden md:block h-full bg-gray-700 p-4 rounded shadow-md max-w-[200px] min-w-80 md:h-[80vh] overflow-y-auto mr-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Projects</h2>
      <div className="space-y-2">
        {contentArray.map((projectArr, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Section Header */}
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-gray-800 transition-colors"
            >
              <span className="text-gray-300 font-medium">{projectArr[1]}</span>
              {expandedSections[sectionIndex] ? (
                <FaChevronDown className="text-gray-400 text-sm" />
              ) : (
                <FaChevronRight className="text-gray-400 text-sm" />
              )}
            </button>

            {/* Section Items */}
            {expandedSections[sectionIndex] && (
              <div className=" mt-2 space-y-1">
                {Array.isArray(projectArr[0]) &&
                  projectArr[0].map((item, itemIndex) => {
                    // Safely check for item properties
                    const title =
                      typeof item?.title === "string"
                        ? item.title
                        : `Project ${itemIndex + 1}`;
                    const role =
                      typeof item?.role === "string" ? item.role : "";
                    const isSelected =
                      selectedContent && selectedContent.title === title;

                    return (
                      <button
                        key={itemIndex}
                        onClick={() => onItemSelect(item, sectionIndex)}
                        className={`block w-full text-left p-2 text-sm rounded transition-colors ${
                          isSelected
                            ? "bg-blue-600 text-white font-medium"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                        }`}
                      >
                        {title}
                        {role && (
                          <span className="block text-sm text-gray-400 hover:text-white px-2">
                            {role}
                          </span>
                        )}
                      </button>
                    );
                  })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
