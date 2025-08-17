import React from "react";
import { FaWindowClose, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
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
  MobileSkillIcons,
  WorkExperiences,
} from "../components/Content";

const UniversalModal = ({ isOpen, onClose, children, initialContent }) => {
  const [selectedContent, setSelectedContent] = useState(ProjectsData[0]);
  const [expandedSections, setExpandedSections] = useState({ 0: true }); // Start with first section expanded

  // Update selected content when initialContent changes
  React.useEffect(() => {
    if (initialContent) {
      setSelectedContent(initialContent);
      // Find which section contains this content and expand it
      const contentArray = [
        [ProjectsData, "Full Stack Projects"],
        [moreProjectsData, "More Full-Stack..."],
        [GamesData, "Real-Time Dev"],
        [moreGamesData, "Game Dev"],
        [EventsData, "A/V Tech"],
      ];

      contentArray.forEach((section, index) => {
        const foundItem = section[0].find(
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
  }, [initialContent]);

  if (!isOpen) return null;

  const contentArray = [
    [ProjectsData, "Full Stack Projects"],
    [moreProjectsData, "More Full-Stack..."],
    [GamesData, "Real-Time Dev"],
    [moreGamesData, "Game Dev"],
    [EventsData, "A/V Tech"],
  ];

  const handleItemSelect = (item, sectionIndex) => {
    setSelectedContent(item);
    // Ensure the section containing the selected item is expanded
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: true,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ">
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
  );
};

export default UniversalModal;

const ModalContentArea = ({ selectedContent, onClose }) => {
  return (
    <div className="modal-content relative bg-gray-700 p-8 rounded shadow-lg max-w-6xl min-h-[100vh] md:min-h-[40vh] max-h-[100vh] md:max-h-[80vh] overflow-y-auto">
      <button
        className="static p-4 md:fixed right-20 top-20 text-white"
        onClick={onClose}
      >
        <FaWindowClose className="text-4xl" />
        <span className="sr-only">Close Modal</span>
      </button>
      {selectedContent ? (
        <div>
          <h2 className="text-3xl font-bold mb-4">{selectedContent.title}</h2>
          <p className="text-2xl text-gray-400 mx-4">{selectedContent.role}</p>
          <p className="m-4">{selectedContent.description}</p>
          {selectedContent.element && (
            <div className="mb-4">{selectedContent.element}</div>
          )}
          {selectedContent.element2 && (
            <div className="mb-4">{selectedContent.element2}</div>
          )}
          {selectedContent.icons && (
            <div className="flex flex-wrap gap-2">
              {selectedContent.icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-gray-100 text-black px-2 py-1 rounded"
                >
                  {icon.icon}
                  <span className="text-sm">{icon.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        children || (
          <p className="text-gray-500">
            Select an item from the sidebar to view details
          </p>
        )
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
    <div className="modal-sidebar hidden md:block h-full bg-gray-700 p-4 rounded shadow-md w-max-[300px] min-w-80 max-h-[80vh] overflow-y-auto mr-4">
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
                {projectArr[0].map((item, itemIndex) => {
                  const isSelected =
                    selectedContent && selectedContent.title === item.title;
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
                      {item.title}
                      {item.role && (
                        <span className="block text-sm text-gray-400 hover:text-white px-2 ">
                          {item.role}
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
