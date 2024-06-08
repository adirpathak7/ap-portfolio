import React, { useEffect } from 'react';
import loadGif from '../images/loadingpagenew.gif'
const Load = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById('spin')?.style.setProperty('display', 'none');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='h-screen w-screen flex justify-center items-center bg-neutral-950'>

            <div id="preloader" className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black  z-20 transition duration-1000 ease-in-out transform translate-y-0 opacity-100">
                    <img src={loadGif} alt="Photography GIF" className=" md:w-[70%] w-full h-auto" />
                </div>
            </div>
        </>
    );
};

export default Load;
