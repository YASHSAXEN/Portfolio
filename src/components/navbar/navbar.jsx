/*We use the react-scroll library here to add smooth scrolling to the particular sections when we choose a particular element from the navbar as well as to add active class to the particular element of the navbar when we move to sepcified section */

import { Link } from 'react-scroll';
import { Link as Lnk, useLocation } from 'react-router-dom';
import styles from './navbar.module.css'
import { motion } from 'framer-motion'
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

function Navbar() {
  let [showNavbar, setShownavbar] = useState(false)
  let location = useLocation()
  let navElementsConatinerVariant = {
    initial:{
      opacity: 1},

    animate:{
      opacity: 1 ,
      transition:{
        staggerChildren:0.2
      }},
  }

  let chidrenVariant = {
    initial:{
      y:-50,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.6
      }
    }
  }
  

  return (
    <>
   {/* normal navbar */}
    <motion.div className={`${styles.navContainer} ${showNavbar && styles.hide} `} 
    variants={navElementsConatinerVariant} initial="initial" animate="animate"
    >
        <motion.div
          variants={chidrenVariant}
          className={styles.navLogo} 
        >
          <Lnk to='/'><a href="#"><h1>Portfolio</h1></a></Lnk>
        </motion.div>
        {location.pathname == '/' &&
        <>
          <motion.div
            className={styles.navElementsConatiner}
            variants={chidrenVariant}
          >
              <li className={styles.navElements} >
                <Link className={styles.Link} to='about' smooth activeClass={styles.active} spy>About</Link>
              </li>
              <li className={styles.navElements} >
                <Link className={styles.Link} to='skills' smooth activeClass={styles.active} spy>Skills</Link>
              </li>
              <li className={styles.navElements} >
                <Link className={styles.Link} to='experience' smooth activeClass={styles.active} spy>Experience</Link>
              </li>
              <li className={styles.navElements} >
                <Link className={styles.Link} to='projects' smooth activeClass={styles.active} spy >Projects</Link>
              </li>
          </motion.div>
          <motion.div 
            variants={chidrenVariant}
            className={styles.navContactUs}
          >
            <Lnk to="/contact-us"><li className={styles.navElements}>Contact Us</li></Lnk>
            <li className={styles.Menu}><TiThMenu onClick={()=>{setShownavbar(true)}}/></li>
          </motion.div>
        </>
      }
    </motion.div>

    {/* dropdown navbar */}
    <div className={`${styles.navbar} ${showNavbar && styles.show}`}>
        <li><IoClose onClick={()=>{setShownavbar(false)}} className={styles.close} /></li>
        <Lnk to="/"><li>Portfolio</li></Lnk>
        <li >
          <Link className={styles.color} to='about' smooth activeClass={styles.active} spy>About</Link>
        </li>
        <li >
          <Link className={styles.color} to='skills' smooth activeClass={styles.active} spy>Skills</Link>
        </li>
        <li >
          <Link className={styles.color} to='experience' smooth activeClass={styles.active} spy>Experience</Link>
        </li>
        <li >
          <Link className={styles.color} to='projects' smooth activeClass={styles.active} spy >Projects</Link>
        </li>
        <Lnk to="/contact-us"><li>Contact Us</li></Lnk>
    </div>


    </>
  )
}

export default Navbar;