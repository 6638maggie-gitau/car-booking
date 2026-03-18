
import React, {useState} from 'react'

const BookingForm = ({car}) => {
    const [pickupDate, setPickupDate]=useState("");
    const [returnDate, setReturnDate]=useState("");
    const [totalPrice, setTotalPrice]=useState("");
    const calculatePrice=() =>{
        if(!pickupDate || !returnDate) return;

        const start=new Date(pickupDate);
        const end=new Date(returnDate);
        const days=(end- start)/(1000*60*60*24);
        if(days >0){
            setTotalPrice(days*car.price);
        }
        else {
            setTotalPrice(0);
        }
    };
    const handleSubmit=(e) =>{
        e.preventDefault();
        calculatePrice();
        alert("Booking confirmed");
    }
  return (
   <form onSubmit={handleSubmit} className='bg-white p-6 rounded-2xl shadow-lg' >
    <h2 className='text-1xl font-bold mb-4'>Book {car.name}</h2>
    <label className='block mb-2'> Pick-up Date</label>
    <input type="date" value={pickupDate}  onChange={(e) => setPickupDate(e.target.value)} className='w-full border p-2 rounded mb-4' />
    <label className='block mb-2'>Return Date</label>
    <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)}  className='w-full border p-2 rounded mb-4'/>
    <button type='submit' className='bg-green-500 text-white w-full py-2 rounded-2xl hover:bg-green-600'>calculate &Book</button>
    {totalPrice>0 && (
        <p className='mt-4 text-lg font-semibold'>Total:${totalPrice}</p>
    )}
   </form>
  )
}

export default BookingForm