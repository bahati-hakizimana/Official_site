import React from 'react'
import Empower from '../../assets/Empower.png'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
import FooterLinks from './FooterLinks'

const Footer = () => {
    const importantLinks=[
        {
            name: "Home"
        },
        {
            name: "About"
        },
        {
            name: "Services"
        },
        {
            name: "Login"
        },
        
    ]
    const Links=[
        {
            name: "CarRental"
        },
        {
            name: "Prmacy"
        },
        {
            name: "Consulting"
        },
        {
            name: "Real Estate"
        },
        
        
    ]
    return (
        <>
            <footer className=' text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900'>
                <div className='footer mx-auto max-w-[1200px] p-4'>
                    {/* Footer content */}
                    <div className='parrent grid md:grid-cols-3 gap-3'>
                        <div className='logo'>
                            <h1 className=' mb-3 text-justfy text-xl font-bold sm:text-left sm:text-3xl'>
                                <a href="">
                                    <img
                                        className=" h-10 w-auto text-2xl bg-slate-400"
                                        src={Empower} alt="Logo" />
                                    
                                </a>
                            </h1>
                            <p className=''>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam sit error fugit hic sunt, recusandae.
                            </p>
                            <br />
                            <div className=' flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Kigali, Kicukiro center</p>
                            </div>
                            <div className=' flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p>+250780035234</p>
                            </div>
                        </div>



                        <div className='ft grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
                            <div className='links'>
                                <h1 className=' mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                                    Important Links
                                </h1>
                                <ul className=' flex flex-col gap-3'>
                                <FooterLinks links={importantLinks} />
                                </ul>
                                
                            </div>
                            <div className='links'>
                                <h1 className=' mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                                    Useful Links
                                </h1>
                                <ul className=' flex flex-col gap-3'>
                                <FooterLinks links={Links} />
                                </ul>
                                
                            </div>
                            <div className='links'>
                            <h1 className=' mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                                    Vist Our Social Media
                                </h1>
                                <div className=' flex flex-col gap-3'>
                                    <h1>Subscribe for our news letter</h1>
                                    {/* <form action="" className=' grid grid-cols-1 md:grid-cols-2'>
                                        <input
                                         type="text"
                                         placeholder='Enter your email'
                                         className=' rounded-full'
                                          />
                                          <button>Submit</button>
                                    </form> */}
                                    <div className=' flex gap-3 mt-6 items-center '>
                                        <a href="#" className=' duration-200 hover:scale-105'>
                                            <FaInstagram className="text-3xl" />
                                        </a>
                                        <a href="#" className=' duration-200 hover:scale-105'>
                                            <FaFacebook className="text-3xl" />
                                        </a>
                                        <a href="#" className=' duration-200 hover:scale-105'>
                                            <FaTelegram className="text-3xl" />
                                        </a>
                                        <a href="#" className=' duration-200 hover:scale-105'>
                                            <FaYoutube className="text-3xl" />
                                        </a>
                                        <a href="#" className=' duration-200 hover:scale-105'>
                                            <FaTwitter className="text-3xl" />
                                        </a>
                                    </div>

                                </div>



                            </div>
                            
                        </div>
                    </div>

                    {/* footer copyright section */}
                    <div className=' bottom-footer'>
                        <p className='py-6 border-t-2 border-gray-300/50 text-center '>
                            Copyrigh @ 2023. empower africa now. All right reserved
                        </p>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
