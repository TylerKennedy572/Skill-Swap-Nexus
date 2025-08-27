
import React from 'react';
import { ArrowPathRoundedSquareIcon } from './IconComponents';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ArrowPathRoundedSquareIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            SkillSwap <span className="text-indigo-600 dark:text-indigo-400">Nexus</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-600 dark:text-gray-300">My Credits: 12</span>
            <img 
                src="https://picsum.photos/id/42/100/100" 
                alt="My Profile" 
                className="w-10 h-10 rounded-full border-2 border-indigo-500"
            />
        </div>
      </div>
    </header>
  );
};
