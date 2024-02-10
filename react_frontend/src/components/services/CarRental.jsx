import React from 'react'
import cars from '../../assets/blogs/cars.jpg'

const CarRental = () => {
    return (
        <>
            <div className='car shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white'>
                <div className=' overflow-x-hidden'>
                    <img
                        src={cars}
                        alt="Not found"
                        className=' mx-auto h-[250px] w-full object-cover transition duration-700
                       hover:skew-x-2 hover:scale-110
                      '
                    />

                </div>
                <div className='first flex justify-between text-slate-600'>
                    <a href="#">
                        <p>Vist site</p>
                    </a>
                    <p className="line-camp-1">
                        book with us and get discount
                    </p>

                </div>
                <div className='tb space-y-2'>
                    <div>
                        <h1 className="line-camp-1 font-bold">
                            Car rental website is now live
                        </h1>
                    </div>
                    <div>
                        <p className="line-camp-2 ml-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minus, optio id? Fuga consequatur laborum ea.
                           
                        </p>
                    </div>



                </div>
               

            </div>
        </>
    )
}

export default CarRental
