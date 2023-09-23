import styles from './socilas.module.css'
import { FaTwitter, FaLinkedin } from "react-icons/fa";
function Social(){
    return(
        <div className={styles.socials}>
        <a target="_blank" href="https://linkedin.com/asaraman">
          {" "}
          <FaLinkedin size={20} />
        </a>
        <a target="_blank" href="https://twitter.com/asaraman">
          {" "}
          <FaTwitter size={20} />
        </a>
      </div>
    )
}

export default Social