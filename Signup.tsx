import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../components/FormInput';
import { useAuthStore } from '../store/authStore';
import type { UserRole } from '../types';

const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['advisor', 'mentee'] as const),
});

type SignupForm = z.infer<typeof signupSchema>;

export const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupForm) => {
    // Simulate signup - replace with actual API call
    login({
      id: '1',
      username: data.username,
      role: data.role,
      language: 'en',
    });
    navigate('/forums');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('signup')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            label="Username"
            {...register('username')}
            error={errors.username?.message}
          />
          <FormInput
            label="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              {...register('role')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="mentee">{t('mentee')}</option>
              <option value="advisor">{t('advisor')}</option>
            </select>
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition-colors"
          >
            {t('signup')}
          </button>
        </form>
      </div>
    </div>
  );
};