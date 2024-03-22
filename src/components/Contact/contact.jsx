import styles from './contact.module.css'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Contact(){
    let form = useRef()
    let userName = useRef()
    let userEmail = useRef()
    let userSubject = useRef()
    let userMessage = useRef("");

    let sendEmail = (e) =>{

        e.preventDefault()

        emailjs.sendForm('service_71wwr1o', 'template_i0xq5sh', form.current, {publicKey: 'Z4c8NnWiz5-1oDwbZ'})
        .then(
          () => {
            userName.current.value =''
            userEmail.current.value =''
            userSubject.current.value =''
            userMessage.current.value =''
            toast.success("Successfully Submitted, I will reach you soon");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

    }

    let parentVariant = {
        initial:{
            y:0
        },
        animate:{
            y:0,
            transition:{
                staggerChildren:0.4
            }
        }
    }
    let childrenVariant = {
        initial:{
            x:-100,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                staggerChildren:0.2
            }
        }
    }

    return(
        <>
            <div className={styles.contactContainer}>
                <motion.div className={styles.contactMain} variants={parentVariant} initial="initial" animate="animate">
                    <motion.div className={styles.contactHeader} variants={childrenVariant}>
                        <p>Contact</p>
                    </motion.div>
                    <motion.form className={styles.inputContainer} variants={parentVariant} ref={form} onSubmit={(e)=>{sendEmail(e)}}>
                        <motion.input type="email" placeholder='Your Email' variants={childrenVariant} name='userEmail' ref={userEmail}/>
                        <motion.input type="text" placeholder='Your Name'  variants={childrenVariant} name='userName' ref={userName}/>
                        <motion.input type="text" placeholder='Subject' variants={childrenVariant} name='userSubject' ref={userSubject}/>
                        <motion.textarea cols="30" rows="10" placeholder='Message' variants={childrenVariant} name='userMessage' ref={userMessage}></motion.textarea>
                        <motion.button variants={childrenVariant}>Send</motion.button>
                    </motion.form>
                </motion.div>
                <ToastContainer />
            </div>
      </>
    )
}

export default Contact;