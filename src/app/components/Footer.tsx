import React from 'react';
import Link from 'next/link';
function Footer() {
    return (
        <footer className='bg-black text-gray-400 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap:8 px-4'>
                <div>
                    <h1 className='font-bold text-2xl mb-6'>About Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloremque.</p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl mb-6'>Contact Us</h1>
                    <p>You can contact me with the following Links : </p>
                    <div><a href="https://github.com/Mr-Tracko" target="_blank" rel="noopener noreferrer">Github</a></div>
                    <div><a href="https://www.linkedin.com/in/shubham-gupta-625709291/" target="_blank" rel="noopener noreferrer">Linked-In</a></div>
                    <div><a href="https://x.com/Shubham_Tracko">Twitter</a></div>
                    
                </div>
                <div>
                    <h1 className='font-bold text-2xl mb-6'>Location</h1>
                    <p>Karnal , Haryana</p>
                    <p>India</p>
                </div>
            </div>
            <div className='text-center mt-12'>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
