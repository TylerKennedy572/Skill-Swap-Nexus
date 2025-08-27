
import React from 'react';
import type { Skill } from '../types';
import { StarIcon, CheckBadgeIcon, ClockIcon } from './IconComponents';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img className="w-14 h-14 rounded-full mr-4 border-2 border-gray-200 dark:border-gray-600" src={skill.providerAvatar} alt={skill.providerName} />
          <div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{skill.providerName}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{skill.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 h-14">{skill.title}</h3>
        
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2">
            {skill.isVerified && (
              <div className="flex items-center text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-800/50 px-2 py-1 rounded-full">
                <CheckBadgeIcon className="w-5 h-5 mr-1" />
                Verified
              </div>
            )}
          </div>
          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
            <ClockIcon className="w-5 h-5" />
            <span>{skill.cost} Credits</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          Request Session
        </button>
      </div>
    </div>
  );
};
