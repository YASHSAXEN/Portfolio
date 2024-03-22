import styles from './heroSection.module.css'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

function HeroSection() {

  let parentVariant = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        staggerChildren:0.2
      }
    }
  }

  let childrenVariant = {
    initial:{
      opacity:0,
      x:-200
    },
    animate:{
      opacity:1,
      x:0,
      transition:{
        duration:0.6
      }
    }
  }

  return (
    <div className={styles.heroContainer} id='about'>
      <motion.div className={styles.leftContainer} 
      variants={parentVariant} initial="initial" animate="animate">
        <motion.div className={styles.one} variants={childrenVariant}>
          <p>Hi, I am Yash Saxena</p>
        </motion.div>
        <motion.div className={styles.two} variants={childrenVariant}>
          <p>I am a <TypeAnimation sequence={["Frontend Developer",1000,"Data Analyst",1000,"FullStack Developer",1000]} repeat={Infinity} speed={10} className={styles.typeAnimation}/></p>
        </motion.div>
        <motion.div className={styles.three} variants={childrenVariant}>
          <p>I am proficient in both data analytics and web development. With expertise in analyzing complex data sets and designing user-centric websites, I am committed to delivering high-quality solutions tailored to project needs. I am eager to explore opportunities for collaboration and discuss how my skills can benefit your endeavors</p>
        </motion.div>
        <motion.div className={styles.four} variants={childrenVariant}>
          <a href="https://drive.google.com/file/d/1AhRdazNGBi7CYua2QefSrImDO785Ff1t/view?usp=sharing" target='_blank'><button>Resume</button></a>
        </motion.div>
      </motion.div>
      <div className={styles.rightContainer}>
        <motion.div 
        className={styles.imageContainer}
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1,delay:0.3}}
        ></motion.div>
      </div>
    </div>
  )
}

export default HeroSection;