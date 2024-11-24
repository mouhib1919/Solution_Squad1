import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Users, Bookmark } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import type { Topic } from '../types';

const topics: { id: Topic; icon: React.ReactNode; count: number }[] = [
  { id: 'social', icon: <Users className="w-6 h-6" />, count: 24 },
  { id: 'emotional', icon: <MessageCircle className="w-6 h-6" />, count: 18 },
  { id: 'academic', icon: <Bookmark className="w-6 h-6" />, count: 31 },
];

export const Forums = () => {
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Forums</h1>
        <span className="text-gray-600">
          Welcome, {user?.username} ({t(user?.role || 'mentee')})
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-rose-50 rounded-lg text-rose-500">
                {topic.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(`topics.${topic.id}`)}
                </h3>
                <p className="text-gray-600">{topic.count} discussions</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};