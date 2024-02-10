import React from 'react'

const BrogCard = ({ Img }) => {
    return (
        <>
            <div className=' scroll-p-4 shadow-lg'>
                <div className=' overflow-x-hidden'>
                    <img
                     src={Img}
                      alt="Not found"
                      className=' mx-auto h-[250px] w-full object-cover transition duration-700
                       hover:skew-x-2 hover:scale-110
                      '
                       />

                </div>
                <div className=''>

                </div>

            </div>
        </>
    )
}

export default BrogCard
