import React from 'react'

const ResponsiveMenu = ({ showMobileMenu }) => {
    return (
        <div className={` ${ showMobileMenu ? "left-0" : "-left-[100%]" } h-screen w-[75%] bg-slate-950 fixed top-0
    transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-white  `}
        >

            <div>
                <h1>test</h1>
            </div>

            <nav className="mt-12">
                <ul className="space-y-4 text-xl">
                   <li>
                    <a href="">Home</a>
                   </li>
                   <li>
                    <a href="">About us</a>
                   </li>
                   <li>
                    <a href="">Services</a>
                   </li>
                   <li>
                    <a href="">Contact us</a>
                   </li>
                   <li>
                    <a href="">Login</a>
                   </li>
                </ul>
            </nav>
            <div className='footer'>
                <h1>copylight 2024 all right reserved</h1>

            </div>

        </div>
    );
};

export default ResponsiveMenu
