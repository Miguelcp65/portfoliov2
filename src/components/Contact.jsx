import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const messagesent = () =>
    toast.success('Message Sent!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const messagenotsent = () =>
    toast.error('An error has occurred!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_njpxn0i',
        'template_qmbncnn',
        form.current,
        'hOz1trmFG1wJrYz8j',
      )
      .then(
        (result) => {
          console.log(result.text)
          {
            messagesent()
          }
        },
        (error) => {
          messagenotsent()
        },
      )
    e.target.reset()
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <ToastContainer
        toastStyle={{ backgroundColor: '#006666', color: '#b2d8d8' }}
      />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]  p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              required
              type='text'
              name='name'
              placeholder="Name"
              className='bg-transparent border-solid border-2 border-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>Your email</span>
            <input
              type='email'
              name='email'
              required
              placeholder="Email"
              className=' py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none bg-transparent border-solid border-2 border-white font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              required
              rows={7}
              name='message'
              placeholder='Message'
              className=' py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none bg-transparent border-solid border-2 border-whitefont-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary'
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
