// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300"
      >
        Ver proyecto
      </a>
    </div>
  </div>
);

export default ProjectCard;