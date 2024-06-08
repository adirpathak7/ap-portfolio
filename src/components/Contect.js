import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if (!name || name === null) {
      alert("Please enter your Name!")
      document.getElementById("name").focus()
    } else if (!email || email === null) {
      alert("Please enter your Email!")
      document.getElementById("email").focus()
    } else if (!email.match(mail)) {
      alert("Please enter the valid Email!")
      document.getElementById("email").focus()
    } else if (!message || message === null) {
      alert("Please the Message!")
      document.getElementById("message").focus()
    }
    else {
      emailjs
        .sendForm('service_smhugci', 'template_k7taj5r', form.current, {
          publicKey: 'zMUUNgCsduo-yUhtN',
        })
        .then(
          () => {
            alert("Thanks for giving response.")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <>
      <div className="bg-neutral-950 text-white ">
        <div className="py-24">

        <h1 className='text-3xl md:text-4xl text-center font-semibold pb-4 md:pb-8 py-4 md:py-8 mb-2 md:mb-4 hover:text-purple-600'>Contact Me</h1>
        </div>
        <form className="max-w-sm mx-auto pb-14 -mt-10" ref={form} onSubmit={sendEmail}>
          <div className="mb-7">
            <input type="text" id="name" name='from_name' className="text-gray-900 text-lg rounded-md block w-full p-2 bg-gray-200 dark:placeholder-gray-400 sm:w-96 md:w-full" placeholder="Enter Name" />
          </div>
          <div className="mb-7">
            <input type="text" id="email" name='from_email' className="text-gray-900 text-lg rounded-md block w-full p-2 bg-gray-200 dark:placeholder-gray-400 sm:w-96 md:w-full" placeholder="Enter your Email" />
          </div>
          <div className="mb-7">
            <textarea type="message" id="message" name='message' className="text-gray-900 text-lg rounded-md block w-full p-2 bg-gray-200 dark:placeholder-gray-400 sm:w-96 md:w-full" placeholder="Enter your message..." />
          </div>
          <input type="submit" value='Send' className="buttonshadow text-white rounded-lg text-1xl w-24 sm:w-auto px-5 py-2.5 text-center bg-gray-700 hover:bg-neutral-950 cursor-pointer hover:border font-semibold" />
        </form>
      </div>
    </>
  )
}