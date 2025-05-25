
import React from 'react';
import SearchForm from './SearchForm';
import { useToast } from '@/hooks/use-toast';

const FlightBooking: React.FC = () => {
  const { toast } = useToast();

  const handleSearch = (searchData: any) => {
    console.log('Flight search:', searchData);
    toast({
      title: "Flight Search",
      description: `Searching flights from ${searchData.from} to ${searchData.to} for ${searchData.guests} passenger(s)`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Flight</h2>
        <p className="text-gray-600">Find the best deals on flights worldwide</p>
      </div>
      <SearchForm onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <h3 className="font-semibold text-lg mb-2">Economy Class</h3>
          <p className="text-blue-100 mb-4">Affordable travel with essential amenities</p>
          <div className="text-2xl font-bold">From $299</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <h3 className="font-semibold text-lg mb-2">Business Class</h3>
          <p className="text-purple-100 mb-4">Enhanced comfort and premium service</p>
          <div className="text-2xl font-bold">From $899</div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl text-white">
          <h3 className="font-semibold text-lg mb-2">First Class</h3>
          <p className="text-amber-100 mb-4">Ultimate luxury and personalized service</p>
          <div className="text-2xl font-bold">From $1,999</div>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
