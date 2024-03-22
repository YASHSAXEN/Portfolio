import styles from "./Skills.module.css"
import { motion } from "framer-motion"

function Skills() {
  
    let parentVariant = {
        initial:{
            opacity:1
        },
        animate:{
            opacity:1,
            transition:{
                staggerChildren:0.4
            }
        }
    }
    let childrenVariant = {
        initial:{
            y:100,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.4,
            }
        }
    }
    let frontendSKills = ["HTML","CSS","Javascript","ReactJS","Redux-Toolkit","Flask","Django","WebScrapping"]
    let dataAnalysis = ["Python","Numpy","Pandas","Matplotlib","Seaborn","Tableau","Machine Learning"]
    let databases = ["SQL","MongoDB"]
    let versionControl = ["Git","GitHub"]
    
  return (
    <div className={styles.skillContainer} id="skills">
        <div className={styles.skillHeader}>
            <p>Skills</p>
        </div>
        <motion.div className={styles.skillNameContainer} 
        variants={parentVariant} initial="initial" whileInView="animate" viewport={{once:true}}
        >
            <motion.div className={styles.skillsbox} variants={childrenVariant}>
                <div className={styles.skillBoxHeader}>
                    <p>Web Development</p>
                </div>
                <div className={styles.skillBoxElementContainer}>
                   {frontendSKills.map((item)=>{
                    return(
                        <div className={styles.skillElements}>
                            <div className={styles.skillElementImage}>
                                <div>
                                    <img src={`../../../public/frontend/${item}.png`} alt="" />
                                </div>
                                
                            </div>
                            <div className={styles.skillElementName}>
                                <p>{item}</p>
                            </div>
                        </div>
                    )
                   })}
                </div>
            </motion.div>
            <motion.div className={styles.skillsbox} variants={childrenVariant}>
                <div className={styles.skillBoxHeader} >
                        <p>Data Analysis</p>
                </div>
                <div className={styles.skillBoxElementContainer}>
                    {dataAnalysis.map((item)=>{
                        return(
                            <div className={styles.skillElements}>
                                <div className={styles.skillElementImage}>
                                    <div>
                                        <img src={`../../../public/data analysis/${item}.png`} alt="" />
                                    </div>
                                    
                                </div>
                                <div className={styles.skillElementName}>
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <motion.div className={styles.skillsbox} variants={childrenVariant}>
                <div className={styles.skillBoxHeader}>
                        <p>Databases</p>
                    </div>
                    <div className={styles.skillBoxElementContainer}>
                    {databases.map((item)=>{
                        return(
                            <div className={styles.skillElements}>
                                <div className={styles.skillElementImage}>
                                    <div>
                                        <img src={`../../../public/databases/${item}.png`} alt="" />
                                    </div>
                                    
                                </div>
                                <div className={styles.skillElementName}>
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <motion.div className={styles.skillsbox} variants={childrenVariant}>
                <div className={styles.skillBoxHeader}>
                        <p>Version Control</p>
                    </div>
                    <div className={styles.skillBoxElementContainer}>
                    {versionControl.map((item)=>{
                        return(
                            <div className={styles.skillElements}>
                                <div className={styles.skillElementImage}>
                                    <div>
                                        <img src={`../../../public/version control/${item}.png`} alt="" />
                                    </div>
                                    
                                </div>
                                <div className={styles.skillElementName}>
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </motion.div>


    </div>
  )
}

export default Skills;