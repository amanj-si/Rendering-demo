"use client";
import {NavLinks} from './nav-links';
import {NavSearch} from './nav-search';


export const Navbar = () => {
    console.log('Navbar');

    return (
        <div>
            <NavLinks/>
            <NavSearch/>
        </div>
    )
}