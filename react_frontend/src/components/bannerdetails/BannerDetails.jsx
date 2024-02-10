import React from 'react'
import software from '../../assets/software.jpg'

const BannerDetails = () => {
    return (
        <section className='btn bg-slate-100 dark:bg-slate-900 dark:text-white'>
            <div className="container flex flex-col items-center justfy-center py-10 md:h-[500px]">
                <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
                    <div
                    data-aos="fade-right"
                    
                    className='mb-2'>
                        <h1 className="text-2xl md:text-4xl">
                            Software Services

                        </h1>
                        <p>
                            We buildup a high-quality and proffessional website and mobile-
                            application on affordable price, digitalize your busness with us
                            and enjoy the grobal benefits. vist the bellow Links to get an experience with us
                        </p>
                        {/* <div>
                    <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                        <li className='font-midiam cursor-pointer hover:text-slate-500 dark:text-slate-500 '> Car rental website.</li>
                        <li className='font-midiam cursor-pointer hover:text-slate-500 dark:text-slate-500 '> Real Estate website</li>
                        <li className='font-midiam cursor-pointer hover:text-slate-500 dark:text-slate-500 '> Pharmacy website</li>
                    </ul>
                </div> */}
                        <div className='space-x-4 mt-3'>
                            <button className='btn-primary text-3xl w-30 h-10 md:items-center'>Check Our Portiforios</button>
                            {/* <button className='btn-primary text-3xl'>Register</button> */}
                        </div>
                    </div>
                    <div
                    data-aos="fade-left"
                    
                    >
                        <img src={software} alt="not found"
                            className='mx-auto w-full p-4 md:max-w-[400px]'
                        />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default BannerDetails
