
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BookingCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  title,
  description,
  icon: Icon,
  isActive,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg
        ${isActive 
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : 'border-gray-200 hover:border-blue-300 bg-white'
        }
      `}
    >
      <div className="flex items-center space-x-4">
        <div className={`
          p-3 rounded-lg transition-colors duration-300
          ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}
        `}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className={`font-semibold text-lg ${isActive ? 'text-blue-700' : 'text-gray-800'}`}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
