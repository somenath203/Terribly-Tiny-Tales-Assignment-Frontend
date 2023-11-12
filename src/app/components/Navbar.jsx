'use client';

import Tippy from '@tippyjs/react';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-8 px-10 font-poppins font-semibold text-violet-700">
            <p className="text-lg lg:text-xl tracking-widest"> <i className="fa-regular fa-user text-2xl lg:text-3xl"></i> ProfilePage</p>
            <Tippy content='GitHub Link of the Project'>
                <a href="https://github.com/somenath203/Terribly-Tiny-Tales-Assignment-Frontend" target="_blank">
                    <p><i className="fa-brands fa-github text-3xl lg:text-4xl"></i></p>
                </a>
            </Tippy>
        </div>
    )
};

export default Navbar;