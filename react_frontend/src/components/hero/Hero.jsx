import React from 'react'
import it from '../../assets/it.jpg'

const Hero = () => {
  return (
    <>
      <div id='home' className="hero h-[650px] md:h-[500px]  bg-gradient-to-r from-violet-950 to-violet-900 pt-20 mt-6">
        <section className="container flex flex-col items-center justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white mt-20">
            {/* hello text */}
            <div 
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className='flex flex-col items-center gap-4 text-center md:items-start md:text-left'>
              <h1 className='text-4xl'>We build Apps that get trending on Appworlds</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum ratione accusamus, numquam error vitae nihil sapiente molestiae aperiam et eligendi,
                veniam iure, provident
                reiciendis adipisci illum similique tempora rem! Aut?
              </p>
              <div className='space-x-4'>
                <button className='btn-primary text-3xl w-20 h-10'>Tolk to us</button>
                {/* <button className='btn-primary text-3xl'>Register</button> */}
              </div>
            </div>
            {/* Image section */}
            <div 
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className='mx-auto max-w-xs p-4'>
              <img src={it} alt="not found" className="" />
            </div>
          </div>
        </section>

      </div>
    </>

  )
}

export default Hero
