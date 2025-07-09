import React from 'react';
import BDCS from '../images/BDCS.jpg';
import College2Career from '../images/College2Career.jpg';
import Track2Crack from '../images/Track2Crack.jpg';
import TaskZen from '../images/TaskZen.jpg';
import HRMS from '../images/HRMS.jpg';

import '../App.css';

export default function Project() {
    return (
        <div className="main-container py-8 md:py-24 bg-neutral-950">
            <h1 className='text-3xl md:text-4xl text-center font-semibold pb-4 md:pb-8 py-4 md:py-8 mb-2 md:mb-4 text-white hover:text-purple-600'>
                My Projects
            </h1>

            <div className="justify-center flex flex-col md:flex-row flex-wrap mx-2 md:mx-0 gap-8 items-center">
                {/* BDCS */}
                <ServiceCard
                    image={BDCS}
                    title="BDCS"
                    description="A blood donation & management web app built with PHP, MySQL, JavaScript, and Tailwind CSS. It connects donors, hospitals, and receivers to streamline blood requests, donations, and inventory. Includes email notifications, request tracking, and an admin dashboard."
                    githubUrl="https://am-portfolio-1191.great-site.net"
                />

                {/* College2Career */}
                <ServiceCard
                    image={College2Career}
                    title="College2Career"
                    description="A college placement portal built with React.js, React Native, and .NET Core. Recruiters post jobs, students apply, and admins manage real-time data, emails, and notifications. Features JWT auth, SMTP, Cloudinary, and AI chatbot integration."
                    githubUrl="https://college2career-frontend.vercel.app/"
                />

                {/* Track2Crack */}
                <ServiceCard
                    image={Track2Crack}
                    title="Track2Crack"
                    description="A task planner app made in React for students preparing for placements. Lets users add, track, and plan future goals. Built with a minimal UI and persistent task saving. Clean, fast, and perfect for individuals or small teams."
                    githubUrl="https://track-crack.vercel.app/"
                />

                {/* TaskZen */}
                <ServiceCard
                    image={TaskZen}
                    title="TaskZen"
                    description="Freelancer platform built with Spring Boot, JSF, JavaScript, and Tailwind CSS. Clients post tasks, freelancers bid and work on multiple projects. Features Razorpay payment, secure JWT login, and role-based access."
                    githubUrl="https://github.com/adirpathak7/TaskZen"
                />

                {/* HRMS */}
                <ServiceCard
                    image={HRMS}
                    title="HRMS"
                    description="An HR system using Java and MERN stack (MongoDB, Express, React, Node.js). Manages employees, departments, and roles. Admins can import/export data, track employees, and manage everything from a secure dashboard."
                    githubUrl="https://github.com/adirpathak7/hrms"
                />
            </div>
        </div>
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
                    <p className="text-base md:text-lg text-white leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="flex justify-center items-center py-4">
                    <a
                        href={githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className="buttonshadow text-white hover:border bg-gray-800 hover:text-purple-600 hover:bg-gray-300 px-4 py-2 rounded-md text-lg"
                    >
                        <i className="fa-brands fa-github mr-2" />
                        Visit
                    </a>
                </div>
            </div>
        </div>
    );
}
