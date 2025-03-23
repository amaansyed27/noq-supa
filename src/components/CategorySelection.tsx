import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Guitar as Hospital, Building2, Bus } from 'lucide-react';

const categories = [
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    description: 'Shop for groceries, household items, and more',
    color: 'bg-blue-500',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Hospital,
    description: 'Book appointments and consultations',
    color: 'bg-green-500',
  },
  {
    id: 'banks',
    name: 'Banks',
    icon: Building2,
    description: 'Banking services and transactions',
    color: 'bg-yellow-500',
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: Bus,
    description: 'Book tickets and track services',
    color: 'bg-purple-500',
  },
];

export function CategorySelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to NoQ
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Select a category to get started
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="relative group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => navigate(`/${category.id}`)}
              >
                <div className="h-48 flex items-center justify-center">
                  <div className={`p-4 rounded-full ${category.color} bg-opacity-10`}>
                    <Icon className={`h-12 w-12 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}