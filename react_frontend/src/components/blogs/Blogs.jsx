import React from 'react'
import BrogCard from './BrogCard'
import cars from '../../assets/blogs/cars.jpg'
import consilting from '../../assets/blogs/consilting.jpg'
import pharmacy from '../../assets/blogs/pharmacy.webp'
import CarRental from '../services/CarRental'
import Consulting from '../services/Consulting'
import Pharmacy from '../services/Pharmacy'

const Blogs = () => {
  return (
    <>
    <div className=' dark:bg-gray-900 dark:text-white'>
    <section
    data-aos="fade-up"
     className='blog container mb-10 py-8'>
        <h1 className='main mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold'>Other Services</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {/* <BrogCard  Img={cars} />
            <BrogCard Img={consilting} />
            <BrogCard  Img={pharmacy} /> */}
            <CarRental />
            <Consulting />
            <Pharmacy />
        </div>
    </section>

    </div>
    
    </>
  )
}

export default Blogs
