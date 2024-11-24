import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Shield, BookOpen, Brain } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Users className="w-12 h-12 text-rose-500" />,
      title: 'Anonymous Support',
      description: 'Connect with peers while maintaining your privacy',
    },
    {
      icon: <Shield className="w-12 h-12 text-rose-500" />,
      title: 'Safe Space',
      description: 'A protected environment for open discussions',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-rose-500" />,
      title: 'Expert Guidance',
      description: 'Get support from psychology students',
    },
    {
      icon: <Brain className="w-12 h-12 text-rose-500" />,
      title: 'Multiple Topics',
      description: 'Find help in various areas of concern',
    },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <Heart className="w-20 h-20 text-rose-500 mx-auto" />
        <h1 className="text-5xl font-bold text-gray-900">{t('welcome')}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t('tagline')}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-rose-50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-8">
          Join our community and get the support you need.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors">
            {t('signup')}
          </button>
          <button className="bg-white text-rose-500 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            {t('login')}
          </button>
        </div>
      </section>
    </div>
  );
};