
import React from 'react';
import SearchForm from './SearchForm';
import { useToast } from '@/hooks/use-toast';
import { Users, Luggage, Fuel } from 'lucide-react';

const CarBooking: React.FC = () => {
  const { toast } = useToast();

  const handleSearch = (searchData: any) => {
    console.log('Car search:', searchData);
    toast({
      title: "Car Rental Search",
      description: `Searching rental cars in ${searchData.from} for ${searchData.guests} passenger(s)`,
    });
  };

  const cars = [
    {
      name: "Economy Car",
      model: "Toyota Corolla or similar",
      passengers: 4,
      luggage: 2,
      transmission: "Automatic",
      fuel: "Hybrid",
      price: 45,
      image: "🚗"
    },
    {
      name: "SUV",
      model: "Honda CR-V or similar",
      passengers: 7,
      luggage: 4,
      transmission: "Automatic",
      fuel: "Gasoline",
      price: 89,
      image: "🚙"
    },
    {
      name: "Luxury Car",
      model: "BMW 3 Series or similar",
      passengers: 4,
      luggage: 2,
      transmission: "Automatic",
      fuel: "Gasoline",
      price: 129,
      image: "🚘"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Rent Your Car</h2>
        <p className="text-gray-600">Choose from our wide selection of rental vehicles</p>
      </div>
      <SearchForm onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-32 bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
              <span className="text-5xl">{car.image}</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-1">{car.name}</h3>
              <p className="text-gray-600 mb-4">{car.model}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Users size={16} className="mr-2" />
                  {car.passengers} passengers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Luggage size={16} className="mr-2" />
                  {car.luggage} large bags
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Fuel size={16} className="mr-2" />
                  {car.fuel} • {car.transmission}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-green-600">${car.price}</span>
                  <span className="text-gray-600">/day</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBooking;
