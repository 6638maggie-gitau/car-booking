import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import bmw from '../assets/bmw.jpeg';
import mercedes from'../assets/mercedes.jpeg';
import mino from '../assets/mino.jpeg';

const Cars = () => {
  const [selectedCar, setSelectedCar] =useState(null);
  const cars =[
    {id:1, name:'BMW G80 M3', type:'SUV', price:160, image:bmw},
    {id:2, name:'MINO', type:'Sedan', price:100, image:mino},
    {id:3,name:'MERCEDES BENZ', type:'Luxury',price:150, image:mercedes}
  ];
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-2xl font-bold text-center mb-10 text-gray-800'>Available Cars</h1>
      <div className='grid md:grid-cols-3 gap-8'>
        {cars.map((car) =>(
        <div key={car.id} className='bg-white p-5 rounded-xl shadow hover:shadow-lg transition'>
          <img src={car.image} alt={car.name} className='w-full h-40 object-cover rounded-lg'/>
          <h2 className='text-xl font-semibold mt-3'>{car.name}</h2>
          <p className='text-gray-600'>Type:{car.type}</p>
          <p className='text-gray-600'>price: ${car.price}</p>
        
           <Link
  to={`/cars/${car.id}`}
  className='mt-4 block w-full text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition'
>
  View Details
</Link>
        </div>
        ))}
      </div>
      <div>
       {selectedCar && (
  <h3>You selected: {selectedCar.name}</h3>
)}
      </div>
    </div>
  )
}

export default Cars