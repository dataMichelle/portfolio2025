import React from "react";

const ProjectDetail = ({ children }) => {
  return (
    <div className="mt-6 p-4 bg-primary-50 dark:bg-neutrals-900 rounded-lg shadow-inner">
      <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2">
        Project Details
      </h3>
      {children}
    </div>
  );
};

export default ProjectDetail;
