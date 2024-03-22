import styles from './Project.module.css'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from "react-icons/fa";

function Project({projects,setProject,project}){

    let parentVariant = {
        initial:{
            y:0
        },
        animate:{
            y:0,
            transition:{
                staggerChildren:0.3
            }
        }
    }

    let childrenVariant = {
        initial:{
            opacity:0,
            y:100
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:0.4
            }
        }
    }

    
    return(
        <div className={styles.projectContainer} id='projects'>
            <div className={styles.projectHeading}>
                <p>Projects</p>
            </div>
            <div className={styles.projectTypes}>

                <div className={styles.projectTypesName}>
                    <p className={`${styles.projectTitles} ${project=="Frontend_Developer"&&styles.active}`} onClick={()=>{setProject('Frontend_Developer')}}>Frontend Developer</p>
                    <p className={`${styles.projectTitles} ${project=="FullStack_Developer"&&styles.active}`} onClick={()=>{setProject('FullStack_Developer')}}>FullStack Developer</p>
                    <p className={`${styles.projectTitles} ${project=="Data_Analyst"&&styles.active}`} onClick={()=>{setProject('Data_Analyst')}}>Data Analyst</p>
                </div>
                
                <motion.div className={styles.projectDetailContainer} variants={parentVariant} initial="initial" whileInView="animate" viewport={{once:true}}>
                    {projects[project].map((item)=>{
                        return(
                            <motion.div className={styles.project}  variants={childrenVariant}>
                                <div className={styles.projectImage}>
                                    <img src={`${import.meta.env.VITE_PUBLIC_URL}assests/${project}/${item.title}.png`} alt="image" />
                                </div>
                                <div className={styles.projectSkills}>
                                    {item["skills"].map((skill)=>{
                                        return(
                                            <p>{skill}</p>
                                        )
                                    })}
                                </div>
                                <div className={styles.projectTitle}>
                                    <a href={item["link"]} target='_blank'><p>{item["title"]}</p></a>
                                    {item["links"] && <a href={item["links"]}><FaExternalLinkAlt/></a>}
                                </div>
                                <div className={styles.desc}>
                                    <p>
                                        {item["desc"]}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Project;