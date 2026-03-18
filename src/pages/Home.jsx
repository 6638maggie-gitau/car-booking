import { useState } from 'react';
import CarCard from '../Components/CarCard';
import BookingForm from '../Components/BookingForm';
import bmw from '../assets/bmw.jpeg';
import mercedes from '../assets/mercedes.jpeg';
import mino from '../assets/mino.jpeg';


const Home = () => {
  const [selectedCar, setSelectedCar] = useState(null);

 const cars = [
  { id: 1, name: "BMW G80 M3", type: "SUV", price: 160, image: bmw},
  { id: 2, name: "MINO ", type: "Sedan", price: 100, image: mino},
  { id: 3, name: "MERCEDES BENZ", type: "Luxury", price: 150, image: mercedes}
];

  return (
    <div className='p-6'>
      <div className='text-center mb-10'>
        <h1 className='text-2xl font-bold'>Find the perfect Ride</h1>
        <p className='text-gray-600 mt-2'>Book cars that are fast and affordable</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onBook={setSelectedCar} />
        ))}
      </div>

      {selectedCar && (
        <div className='mt-10'>
          <BookingForm car={selectedCar} />
        </div>
      )}
    </div>
  );
};

export default Home;