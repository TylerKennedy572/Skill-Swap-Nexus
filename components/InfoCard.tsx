
import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
};

export const SkeletonCard: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-pulse">
            <div className="flex items-center mb-4">
                <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full mr-4 w-14 h-14"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
        </div>
    );
}
