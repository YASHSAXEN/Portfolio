import styles from "./Experience.module.css"
import { motion } from 'framer-motion'

function Experience() {

    let parentVariant = {
        initial:{
            y:100,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                delay:0.2,
                duration:0.6,
            }
        }
    }

  return (
    <div className={styles.expContainer} id="experience">
        <div className={styles.expHeader}>
            <p>Experience</p>
        </div>
        <motion.div className={styles.expBox} variants={parentVariant} initial="initial" whileInView="animate" viewport={{once:true}}>
            <div className={styles.expDetailContainer}>
                <div className={styles.one}>
                    <div>
                        <img src={import.meta.env.VITE_PUBLIC_URL + "assests/images/edunet-foundation.png"} alt="" />
                    </div>
                </div>
                <div className={styles.two}>
                    <div className={styles.two_one}>
                        <p>Data Analyst</p>
                    </div>
                    <div className={styles.two_two}>
                        <p>Edunet Foundation</p>
                    </div>
                    <div className={styles.two_three}>
                        <p>June 2023 - Aug 2023</p>
                    </div>
                </div>
            </div>
            <div className={styles.expSummary}>
                <p>As a Data Analyst Intern at Edunet Foundation, I honed my analytical skills while contributing to the organization`s success. My primary responsibility was to analyze sales data, providing valuable insights that informed strategic decisions. This internship allowed me to apply my knowledge of data analysis tools and techniques, including Python, Excel, and data visualization, to real-world scenarios.</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Experience;