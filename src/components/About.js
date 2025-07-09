import React from 'react';
import DeveloperGif from '../images/DevloperGif2.gif';

export default function About() {
    return (
        <div className="main-container py-16 px-4 md:px-20 bg-neutral-950 text-white">
            <h1 className="text-3xl md:text-4xl text-center font-bold mb-12 mt-4 hover:text-purple-600 transition-all duration-300">
                About Me
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={DeveloperGif}
                        alt="Developer Animation"
                        className="w-[90vw] md:w-[80%] max-w-md rounded-lg shadow-lg object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 font-sans text-left space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Let me introduce myself
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed">
                        Hi, I'm <span className="text-purple-500 font-semibold">Aaditya Pathak</span>, a passionate and detail-oriented
                        <span className="text-purple-500 font-semibold"> Full Stack Web Developer</span> from
                        <span className="text-purple-500 font-semibold"> Surat, India</span>.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed">
                        I'm currently pursuing my <span className="text-purple-500">Master’s in Information and Communication Technology (M.Sc. ICT)</span> from VNSGU, after completing my
                        <span className="text-purple-500"> BCA with 80.80%</span>.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed">
                        I’ve trained at <span className="text-purple-500 font-semibold">TriBase Solutions</span> where I built <strong>College2Career</strong> – a full-stack college placement system using
                        <strong> .NET Core 8, React.js, React Native, Cloudinary, JWT</strong>, and even an AI chatbot.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed">
                        At <span className="text-purple-500 font-semibold">NJ India Invest Pvt. Ltd.</span>, I developed scalable
                        <strong> Spring Boot REST APIs</strong>, interactive UIs in <strong>React.js</strong>, and maintained a robust
                        <strong> MySQL database</strong> structure.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed">
                        My toolkit includes: <span className="text-purple-400">Java, C#, JavaScript, SQL, React, Spring Boot, .NET Core, Tailwind CSS, MySQL, Git, Postman, Razorpay, JWT, Cloudinary, SMTP</span>.
                    </p>

                    <p className="text-base md:text-lg leading-relaxed">
                        I love building clean, functional, and scalable web applications that solve real-world problems with great user experience and solid backend logic.
                    </p>

                    {/* <p className="text-base md:text-lg leading-relaxed">
                        Let’s build something amazing together 🚀
                    </p> */}
                </div>
            </div>
        </div>
    );
}
