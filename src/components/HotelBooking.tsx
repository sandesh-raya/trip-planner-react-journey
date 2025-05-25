
import React from 'react';
import SearchForm from './SearchForm';
import { useToast } from '@/hooks/use-toast';
import { Star, Wifi, Car, Coffee } from 'lucide-react';

const HotelBooking: React.FC = () => {
  const { toast } = useToast();

  const handleSearch = (searchData: any) => {
    console.log('Hotel search:', searchData);
    toast({
      title: "Hotel Search",
      description: `Searching hotels in ${searchData.to} for ${searchData.guests} guest(s)`,
    });
  };

  const hotels = [
    {
      name: "Grand Plaza Hotel",
      location: "Downtown",
      rating: 5,
      price: 299,
      amenities: [Wifi, Car, Coffee],
      image: "🏨"
    },
    {
      name: "Seaside Resort",
      location: "Beachfront",
      rating: 4,
      price: 189,
      amenities: [Wifi, Coffee],
      image: "🏖️"
    },
    {
      name: "Mountain Lodge",
      location: "Mountain View",
      rating: 4,
      price: 159,
      amenities: [Wifi, Car],
      image: "🏔️"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Hotel</h2>
        <p className="text-gray-600">Discover amazing places to stay</p>
      </div>
      <SearchForm onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
              <span className="text-6xl">{hotel.image}</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-1">{hotel.name}</h3>
              <p className="text-gray-600 mb-2">{hotel.location}</p>
              
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < hotel.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({hotel.rating}/5)</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                {hotel.amenities.map((Icon, i) => (
                  <Icon key={i} size={16} className="text-gray-500" />
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-teal-600">${hotel.price}</span>
                  <span className="text-gray-600">/night</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelBooking;
