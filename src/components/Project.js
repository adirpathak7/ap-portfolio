import React from 'react';
import BDCS from '../images/BDCS.jpg';
import HRMS from '../images/HRMS.jpg';
import LMS from '../images/LMS.jpg';
import '../App.css';

export default function Project() {
    return (
        <>
            <div className="main-container py-8 md:py-24 bg-neutral-950">
                <h1 className='text-3xl md:text-4xl text-center font-semibold pb-4 md:pb-8 py-4 md:py-8 mb-2 md:mb-4 text-white hover:text-purple-600'>
                    My Projects
                </h1>

                <div className="justify-center flex flex-col md:flex-row mx-2 md:mx-0 space-y-6 md:space-y-0 md:space-x-6 gap-8">
                    <ServiceCard
                        image={BDCS}
                        title="BDCS"
                        description="Blood Distribution & Collection System: Web app connecting blood donor’s, receiver’s & hospital’s. Manages blood inventory & requests (built with PHP, MySQL, JS, Tailwind CSS). Streamlines communication & ensures efficient blood donation. User-friendly interface with email notifications for all parties. Supports admin communication for user inquiries."
                        githubUrl="https://github.com/adirpathak7/BDCS"
                    />
                    <ServiceCard
                        image={HRMS}
                        title="HRMS"
                        description="Human Resource Management System: Web app built with Java and MERN stack (MongoDB, Express, React, Node). Simplifies employee & department management. Empowers admins to import/export data for accurate records & analysis. Clear role definition within departments for improved organization. Enhances HR efficiency and data management."
                        githubUrl="https://github.com/adirpathak7/HRMS"
                    />
                    <ServiceCard
                        image={LMS}
                        title="LMS"
                        description="Learning Management System: E-learning platform developed using ReactJS, Spring, MySQL, Tailwind CSS. Instructors manage courses, create content & assign user roles. Learners discover & purchase courses, access materials, & track progress. Dynamic UI (ReactJS), robust backend (Spring), secure storage (MySQL). Showcases expertise in full-stack development for modern e-learning."
                        githubUrl="https://github.com/adirpathak7/lms"
                    />
                </div>
            </div>
        </>
    );
}

function ServiceCard({ image, title, description, githubUrl }) {
    return (
        <div className="card flex flex-col bg-black rounded-lg w-full md:w-96 hover:scale-105 shadow-lg transition-all">
            <div className="h-56 overflow-hidden rounded-md m-2">
                <img
                    src={image}
                    alt={`${title} image`}
                    className="w-full h-full object-cover opacity-80"
                />
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
                <div>
                    <h5 className="text-2xl font-bold leading-snug tracking-normal text-white uppercase text-center mb-2">
                        {title}
                    </h5>
                    <p className="text-base md:text-lg sm:text-2xl text-white leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
                <div className="flex justify-center items-center py-2">
                    <a href={githubUrl} target='_blank' className="buttonshadow text-white hover:border bg-gray-800 hover:text-purple-600 hover:bg-gray-300 px-4 py-2 rounded-md text-lg">
                        <span className="mr-2">
                            <i className="fa-brands fa-github" />
                        </span>{" "}
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
