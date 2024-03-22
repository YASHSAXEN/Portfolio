import styles from './contact.module.css'
import { motion } from 'framer-motion'

function Contact(){

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
        <div className={styles.contactContainer}>
            <motion.div className={styles.contactMain} variants={parentVariant} initial="initial" animate="animate">
                <motion.div className={styles.contactHeader} variants={childrenVariant}>
                    <p>Contact</p>
                </motion.div>
                <motion.div className={styles.inputContainer} variants={parentVariant}>
                    <motion.input type="email" placeholder='Your Email' variants={childrenVariant}/>
                    <motion.input type="text" placeholder='Your Name'  variants={childrenVariant}/>
                    <motion.input type="text" placeholder='Subject' variants={childrenVariant}/>
                    <motion.textarea cols="30" rows="10" placeholder='Message' variants={childrenVariant}></motion.textarea>
                    <motion.button variants={childrenVariant}>Send</motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact;