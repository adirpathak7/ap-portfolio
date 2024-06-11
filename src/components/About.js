import React, { useState } from 'react';
import Devloper from '../images/DevloperGif2.gif';

export default function About() {

    let [aboutData] = useState({
        image: Devloper,
        title: 'Let me introduce myself',
        description1: ``,
        description2: ``,
    });

    return (
        <>
            <div className="main-container py-8 md:py-24 bg-neutral-950 text-white">
                <h1 className='text-3xl md:text-4xl text-center font-semibold pb-4 md:pb-8 py-4 md:py-8 mb-2 md:mb-4 -mt-4 hover:text-purple-600'>About Me</h1>

                <div className="flex flex-col md:flex-row md:-mt-7">
                    <div className="w-full md:w-1/2 flex justify-center bg-neutral-950">
                        <img src={Devloper} alt="Developer Gif" className='w-[90vw] md:w-3/4 object-contain m-5 md:m-10' />
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center mt-20">
                        <div className="space-y-4 w-11/12 md:w-2/3 font-sans">
                            <h1 className='text-2xl md:text-4xl'>
                                {aboutData.title}
                            </h1>

                            <p className='text-xl md:text-base pt-4'>
                                Hi Everyone,
                            </p>
                            <p className='text-sm md:text-base'>I'm <c className='text-purple-600'> Aaditya Pathak</c>, a dedicated <c className="text-purple-600"> Full-Stack Web Developer</c> from <c className="text-purple-600"> Surat, India.</c></p>

                            <p className="text-sm md:text-base">
                                With a robust foundation in both <c className='text-purple-600'>front-end</c> and <c className='text-purple-600'>back-end technologies</c>, I have developed a diverse skill set that enables me to build comprehensive web applications.
                            </p>

                            <p className="text-sm md:text-base">
                                My journey in programming began with a strong interest in web technologies and has evolved to encompass a wide range of modern <c className='text-purple-600'> development tools</c> and <c className='text-purple-600'>frameworks</c>.
                            </p>

                            <p className="text-sm md:text-base">
                            I have worked as <c className='text-purple-600'>Full Stack Web Developer Trainee</c> at <a href='https://www.njgroup.in/' target='_blank' className='text-purple-600'>NJ India Invest Pvt. Ltd.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
