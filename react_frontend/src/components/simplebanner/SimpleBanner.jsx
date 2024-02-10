import React from 'react'

const SimpleBanner = () => {
    return (
        <>
            <div className="bg-purple-500">
                <div className="simple container py-8 md:py-12">
                    <div 
                    data-aos="fade-up"
                    
                    className='grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8'>
                        <div>
                            <iframe
                                className='aspect-video w-full'
                                src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
                                title='Youtube video player'
                                allow='accelerometer; autoplay; clipboard-writer; encrypted-media; gyroscope;
                               picture-in-picture; web-share'
                                allowFullScreen
                                frameborder="0"
                            ></iframe>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center text-white dark:text-white col-span-2
                               md:items-start md:text-left
                                 ">
                            <h1 className="text-3xl font-bold">
                                Market Your Brand with Us
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perspiciatis quo dolore pariatur dolores error architecto animi!
                                Quis odit fuga sequi sit sed cupiditate
                                reprehenderit nesciunt. Voluptatibus dolores tempora dolorum doloribus.
                            </p>
                            <div className='btn-black text-white'>
                                <button className=' text-xl w-30 h-10 md:items-center'><a href="#">Get Started</a></button>
                                {/* <button className='btn-primary text-3xl'>Register</button> */}
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
            </div>

        </>


    )
}

export default SimpleBanner
