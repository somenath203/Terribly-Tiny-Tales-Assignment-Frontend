'use client';

import Tippy from '@tippyjs/react';
import Link from 'next/navigation';

const Navbar = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-between py-6 px-10 font-poppins font-semibold text-violet-700">

            <p className="text-lg tracking-widest flex items-center justify-center gap-2"> <i className="fa-regular fa-user text-3xl"></i> <span className='hidden lg:block'>ProfileAndPost</span> </p>

            <div className='flex items-center justify-center gap-4 text-lg lg:text-xl font-poppins tracking-wider mt-3 lg:mt-0'>

                <Tippy content='Profile Section'>
                    <Link href='/pages/userprofile'>
                        <p className='hover:cursor-pointer hover:text-violet-500 duration-150'>Profile</p>
                    </Link>
                </Tippy>

                <Tippy content='Posts Section'>
                    <Link href='/pages/userposts'>
                        <p className='hover:cursor-pointer hover:text-violet-500 duration-150'>Posts</p>
                    </Link>
                </Tippy>

                <Tippy content='GitHub Link of the Project'>
                    <a href="https://github.com/somenath203/Terribly-Tiny-Tales-Assignment-Frontend" target="_blank" className='hover:text-violet-500'>
                        <p><i className="fa-brands fa-github text-3xl lg:text-4xl"></i></p>
                    </a>
                </Tippy>


            </div>

        </div>
    )
};

export default Navbar;