import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CarCard = ({car, onBook}) => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-4'>
<img src={car.image} alt={car.name} className='w-full h-40 object-cover rounded-xl' />
        <h2 className='text-xl font-bold mt-2'>{car.name}</h2>
        <p className='text-gray-600'>{car.type}</p>
        <p className='text-lg font-semibold mt-2'>${car.price}/day</p>
        <button onClick={() => onBook(car)} className='mt-3 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600'>Book now</button>
    </div>
  )

}
export default CarCard