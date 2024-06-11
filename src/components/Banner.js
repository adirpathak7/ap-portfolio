import React, { useEffect, useRef } from 'react'
import myimg from '../images/meinsvg2.gif'
import Typed from 'typed.js'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Banner() {

    let element = useRef(null);
    useEffect(() => {
        let typed = new Typed(element.current, {
            strings: ["Full-Stack Web Developer", "Freelancer", "Java Developer", "React Developer"],
            startDelay: 100,
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 60,
            loop: true
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <>
            <div className="main-container bg-neutral-950 flex flex-col md:flex-row items-center py-5">

                <div className="md:w-3/5 flex justify-center text-white mt-10 md:mt-16">
                    <div className='w-full md:w-2/3 ms-8 shadow'>
                        <h3 className='font-medium text-2xl md:text-4xl mt-20'>Hi,</h3>

                        <div className="mt-6">
                            <h1 className='font-medium text-2xl md:text-4xl'>I'M &nbsp; <span className='font-extralight'><strong className='font-semibold uppercase text-purple-500'>Aaditya Pathak</strong></span></h1>
                        </div>

                        <div className="">
                            <h2 className='mt-6 md:mt-12 font-light text-2xl md:text-4xl text-purple-500'><span className='font-semibold' ref={element}></span></h2>
                        </div>

                        <div className="icons-container flex space-x-5 mt-10 md:mt-24">
                            <a href='https://github.com/adirpathak7' target='_blank' className="buttonshadow w-10 h-10 rounded-full flex justify-center items-center bg-gray-800 hover:scale-125 transition-all hover:text-purple-600 hover:bg-gray-300">
                                <i className="fab fa-github text-2xl"></i>
                            </a>

                            <a href='https://www.linkedin.com/in/aaditya-pathak-5708a628b' target='_blank' className="buttonshadow w-10 h-10 rounded-full flex justify-center items-center bg-gray-800 hover:scale-125 transition-all hover:text-purple-600 hover:bg-gray-300">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>

                            <a href='https://x.com/Adiiiirp7?t=7n2z8tngPWBNVFVlJTqGog' target='_blank' className="buttonshadow w-10 h-10 rounded-full flex justify-center items-center bg-gray-800 hover:scale-125 transition-all hover:text-purple-600 hover:bg-gray-300">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>

                            <a href='https://www.instagram.com/mr.adiiii7' target='_blank' className="buttonshadow w-10 h-10 rounded-full flex justify-center items-center bg-gray-800 hover:scale-125 transition-all hover:text-purple-600 hover:bg-gray-300">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                        </div>
                        <div className='mt-7'>
                            <Link to='/Contact' className='buttonshadow px-3 py-2 bg-gray-800 hover:border rounded-lg text-white font-bold text-lg md:text-xl w-36 md:w-44 hover:text-purple-600 hover:bg-gray-300'>Contact</Link>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center md:w-3/5 mt-20'>
                    <img src={myimg} alt="My Pic" className='rounded w-[90vw] h-[40%] md:w-[70%] md:h-[40%] mt-6 md:mt-10 shadow my-2' />
                </div>
            </div>
        </>
    )
}
