import styles from "./Footer.module.css"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.icons}>
            <a href="https://github.com/YASHSAXEN" target="_blank"><FaGithub className={styles.iconStyle}/></a>
            <a href="https://www.linkedin.com/in/yash-saxena-1935bb226/" target="_blank"><FaLinkedin className={styles.iconStyle}/></a>
        </div>
        <div className={styles.copyright}>
            <p> &copy; 2024 Yash Saxena All rights reserved </p>
        </div>
    </div>
  )
}

export default Footer;