import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Banner from './Banner';
import About from './About';
import Project from './Project';
import Skill from './Skill';
import Contact from './Contect';
import Footer from './Footer';
import '../App.css';
import logo from '../images/logo.png';

const resumeURL = "AadityaPathakR.pdf";

const Navbar = ({ userName, resumeURL }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* <Star /> */}
            <div ref={navbarRef} className="bg-zinc-950 text-white fixed w-full z-50 backdrop-blur-xl">
                <div className="h-20 flex justify-between items-center px-4 md:px-10">
                    <a href='/'>
                        <img src={logo} alt="logo" className='cursor-pointer ml-6 h-16' />
                    </a>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 text-2xl focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0,0,256,256"
                                width="24px"
                                height="24px"
                            >
                                <g
                                    fill="#f3f2f2"
                                    fillRule="nonzero"
                                    stroke="none"
                                    strokeWidth={1}
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeMiterlimit={10}
                                    strokeDasharray=""
                                    strokeDashoffset={0}
                                    fontFamily="none"
                                    fontWeight="none"
                                    fontSize="none"
                                    textAnchor="none"
                                    style={{ mixBlendMode: "normal" }}
                                >
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z" />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-10 mr-18 text-xl items-center">
                        <NavItem link="/" text="Home" onClick={closeMenu} />
                        <NavItem link="/About" text="About" onClick={closeMenu} />
                        <NavItem link="/Project" text="Project" onClick={closeMenu} />
                        <NavItem link="/Skill" text="Skill" onClick={closeMenu} />
                        <div className="space-x-20">
                            <a href={resumeURL} download="AadityaPathakR.pdf" onClick={closeMenu} className="buttonshadow text-center py-2 bg-gray-700 hover:text-purple-600 hover:bg-gray-300 rounded-lg hover:border text-white text-lg font-bold w-24 hidden md:block">
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-4 py-2 space-y-2">
                            <NavItem link="/" text="Home" onClick={closeMenu} />
                            <NavItem link="/About" text="About" onClick={closeMenu} />
                            <NavItem link="/Project" text="Project" onClick={closeMenu} />
                            <NavItem link="/Skill" text="Skill" onClick={closeMenu} />
                            <a href={resumeURL} download="Aaditya Resume.pdf" onClick={closeMenu}> <button className="buttonshadow text-center py-1 bg-gray-700 hover:text-purple-500 hover:bg-gray-300 rounded hover:border text-white text-lg font-bold px-5">
                                Resume</button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

const NavItem = ({ link, text, onClick }) => (
    <Link to={link} onClick={onClick} className="text-xl hover:text-purple-500 flex">
        {text}
    </Link>
);

export default function Home() {
    const [userName] = useState("AP");

    // Section references
    const homeSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const projectSectionRef = useRef(null);
    const skillSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    // Get the current location
    const location = useLocation();

    // Object map for paths and their corresponding refs
    const sectionRefs = {
        '/': homeSectionRef,
        '/About': aboutSectionRef,
        '/Project': projectSectionRef,
        '/Skill': skillSectionRef,
        '/Contact': contactSectionRef
    };

    // Scroll to the section whenever the path changes
    useEffect(() => {
        const sectionRef = sectionRefs[location.pathname];
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className='mainApp'>
            <Navbar userName={userName} resumeURL={resumeURL} />
            <div ref={homeSectionRef} id="home">
                <Banner />
            </div>
            <div ref={aboutSectionRef} id="about">
                <About />
            </div>
            <div ref={projectSectionRef} id="project">
                <Project />
            </div>
            <div ref={skillSectionRef} id="skill">
                <Skill />
            </div>
            <div ref={contactSectionRef} id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    );
}
