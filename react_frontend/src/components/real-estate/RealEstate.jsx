import React from 'react'
import realestate from '../../assets/real-estate.jpg'

const RealEstate = () => {
    return (
        <>
        <section className='py-8 bg-slate-100 dark:bg-slate-900 dark:text-white'>
            <div className="container flex flex-col items-center justfy-center py-10 md:h-[500px]">
                <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
                    <div
                    data-aos="fade-right"
                     
                    >
                        <img src={realestate} alt="not found"
                            className='mx-auto w-full p-4 md:max-w-[400px]'
                        />
                    </div>
                    <div
                    data-aos="fade-left"
                    
                    >
                        <h1 className="text-2xl md:text-4xl">
                            Real Estate services
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod molestias tempore placeat, nesciunt suscipit nam dolore
                            voluptate dignissimos recusandae,
                            quidem praesentium commodi quas ipsa est repudiandae soluta rerum quam possimus!
                        </p>
                        {/* <div>
                    <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                        <li className='font-midiam cursor-pointer hover:text-slate-500 dark:text-slate-500 '> Car rental website.</li>
                        <li className='font-midiam cursor-pointer hover:text-slate-500 dark:text-slate-500 '> Real Estate website</li>
                        <li className='font-midiam cursor-pointer hover:text-slate-500 dark:text-slate-500 '> Pharmacy website</li>
                    </ul>
                </div> */}
                        <div className='real space-x-4 mt-3'>
                            <button className='btn-primary text-3xl w-30 h-10 md:items-center'><a href="#">Interrested click! here</a></button>
                            {/* <button className='btn-primary text-3xl'>Register</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
        
    )
}

export default RealEstate
