
import React from "react";
import { useParams } from "react-router-dom";
import bmw from '../assets/bmw.jpeg';
import mercedes from '../assets/mercedes.jpeg';
import mino from '../assets/mino.jpeg';

const CarsDetails = () => {
  const { id } = useParams();
  const cars=[
    {id:1, name:'BMW G80 M3', type:'SUV', price:160, image:bmw, description:'luxury sports car with powerful engine' },
    {id:2, name:'MINO', type:'Sedan',price:100, image:mino, description:'affordable and comfortable'},
    {id:3, name:'MERCEDES BENZ', type:'luxury',price:150, image:mercedes, description:'premium luxury vehicle'},
  ];
  const car=cars.find((c)=> c.id ===Number(id));
  if(!car) {
    return <h1 className='text-center mt-10'>Car not found</h1>
  }
  return (
    <div className='min-h-screen bg-gray-100 p-8 flex justify-center'>
      <div className='bg-white p-6 rounded-xl shadow-lg max-w-lg'>
        <img src={car.image} alt={car.name}  className='w-full h-60 object-cover rounded-lg'/>
        <h2 className='text-xl font-bold mt-4'>{car.name}</h2>
        <p className='text-gray-600'>Type:{car.type}</p>
        <p className='text-gray-600'>Price: ${car.price}</p>
        <p className='mt-3'>{car.description}</p>
        <button className='mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition'>Book this car</button>
      </div>
    </div>
  )
}
export default CarsDetails