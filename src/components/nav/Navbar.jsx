import React, { useState } from 'react';
import Link from '../link/Link';
import './Navbar.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setopen] = useState(false)
    const routes = [
        { name: "Home", id: 1, path: "/" },
        { name: "About Us", id: 2, path: "/about" },
        { name: "Products", id: 3, path: "/products" },
        { name: "Contact", id: 4, path: "/contact" },
        { name: "Services", id: 5, path: "/services" }
    ];
    return (
        <nav className='bg-pink-400'>
            <div onClick={() => setopen(!open)} className="md:hidden">
                <span>
                    {open === true ?
                        <XMarkIcon className="h-6 w-6 text-blue-500" /> :
                        < Bars3Icon className="h-6 w-6 text-blue-500" />}
                </span>


            </div>

            <ul className={`md:flex  justify-evenly  items-center  absolute md:static duration-500 pl-8 bg-pink-400 ${open ? 'top-6' : '-top-48'}`}>
                {
                    routes.map(rout => <Link key={rout.id} rout={rout}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;