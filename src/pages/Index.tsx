
import React, { useState } from 'react';
import { Plane, Hotel, Car } from 'lucide-react';
import BookingCard from '@/components/BookingCard';
import FlightBooking from '@/components/FlightBooking';
import HotelBooking from '@/components/HotelBooking';
import CarBooking from '@/components/CarBooking';

type BookingType = 'flights' | 'hotels' | 'cars';

const Index = () => {
  const [activeBooking, setActiveBooking] = useState<BookingType>('flights');

  const bookingOptions = [
    {
      id: 'flights' as BookingType,
      title: 'Flights',
      description: 'Search and book flights worldwide',
      icon: Plane
    },
    {
      id: 'hotels' as BookingType,
      title: 'Hotels',
      description: 'Find and reserve accommodations',
      icon: Hotel
    },
    {
      id: 'cars' as BookingType,
      title: 'Car Rentals',
      description: 'Rent vehicles for your journey',
      icon: Car
    }
  ];

  const renderBookingComponent = () => {
    switch (activeBooking) {
      case 'flights':
        return <FlightBooking />;
      case 'hotels':
        return <HotelBooking />;
      case 'cars':
        return <CarBooking />;
      default:
        return <FlightBooking />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Book flights, hotels, and car rentals all in one place
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-sm font-medium">✈️ Trusted by 1M+ travelers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Booking Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bookingOptions.map((option) => (
            <BookingCard
              key={option.id}
              title={option.title}
              description={option.description}
              icon={option.icon}
              isActive={activeBooking === option.id}
              onClick={() => setActiveBooking(option.id)}
            />
          ))}
        </div>

        {/* Active Booking Component */}
        <div className="animate-in fade-in duration-300">
          {renderBookingComponent()}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">We compare millions of deals to find you the best prices</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
            <p className="text-gray-600">Your personal information is protected with industry-leading security</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our customer service team is here to help you anytime, anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
