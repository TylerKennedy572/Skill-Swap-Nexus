
import React from 'react';
import type { Project } from '../types';
import { ClockIcon } from './IconComponents';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 h-20">{project.description}</p>
        
        <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
                {project.requiredSkills.map(skill => (
                    <span key={skill} className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">{skill}</span>
                ))}
            </div>
        </div>

        <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Team</h4>
            <div className="flex items-center space-x-2">
                <div className="flex -space-x-2 overflow-hidden">
                    {project.teamMembers.map(member => (
                        <img key={member.name} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src={member.avatar} alt={member.name} />
                    ))}
                </div>
                 <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.teamMembers.length} member{project.teamMembers.length > 1 ? 's' : ''}
                </span>
            </div>
        </div>

      </div>

      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
            <ClockIcon className="w-6 h-6" />
            <div>
              <span className="block">{project.creditPool}</span>
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">Credit Pool</span>
            </div>
          </div>

          <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};
