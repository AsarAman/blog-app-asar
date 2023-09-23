import styles from "./bloginfo.module.css";
import Image from "next/image";
function BlogInfo({ author, time, date }) {
  return (
    <div className={styles.created}>
      <div className={styles.profile}>
        <Image
          width={50}
          height={50}
          src="/images/profile-pic.png"
          alt="profile"
        />
      </div>
      <div>
        <p className={styles.name}>{author}</p>
        <p className={styles.date}>
          {date} . <span>{time}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default BlogInfo;
