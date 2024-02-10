import React from 'react'
import CountUp from 'react-countup'

const OverviewCounter = () => {
    return (
        <>
            <div className=' dark:bg-gray-900 dark:text-white'>
                <section className='container h-12 md:h-32 p-3'>
                    <div className=" grid grid-cols-4 divide-x divide-slate-700 mx-auto w-full md:max-w-[800px] shadow-lg -translate-y-20 md:-translate-y-12 p-2 my-4 md:p-8 bg-white dark:bg-gray-800 dark:text-white/70">
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                                <CountUp end={234} suffix="+" duration={2.75} />
                            </h1>
                            <p>Clients</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                                <CountUp end={234} suffix="+" duration={2.75} />
                            </h1>
                            <p>Projects</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                                <CountUp end={234} suffix="+" duration={2.75} />
                            </h1>
                            <p>Pharmacies</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                                <CountUp end={234} suffix="+" duration={2.75} />

                            </h1>
                            <p>Partiners</p>
                        </div>
                    </div>
                </section>

            </div>

        </>

    )
}

export default OverviewCounter
