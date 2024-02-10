import React from 'react'
import consilting from '../../assets/blogs/consilting.jpg'

function Consulting() {
  return (
    <>
    <div className='car scroll-p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white'>
                <div className=' overflow-x-hidden'>
                    <img
                     src={consilting}
                      alt="Not found"
                      className=' mx-auto h-[250px] w-full object-cover transition duration-700
                       hover:skew-x-2 hover:scale-110
                      '
                       />

                </div>
                <div className='first flex justify-between scroll-pt-2 text-slate-600'>
                    <a href="#">
                        <p>Vist site</p>
                    </a>
                    <p className="line-camp-1">
                        Consuliting Services
                    </p>

                </div>
                <div className='tb space-y-2 py-3'>
                    <div>
                        <h1 className="line-camp-1 font-bold">
                            Consuling website is now live
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

export default Consulting
