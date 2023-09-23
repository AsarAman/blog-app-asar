import styles from './about.module.css'
import Subscribe from '../homepage/subscribe';
function About() {
  return (
    <section className={`${styles.about} section-center`}>
        <div className={styles.info}>
      <h1>Exploring the Frontiers of Technology</h1>
      <p>
        Welcome to our Tech Innovator blog, your go-to destination for exploring
        the frontiers of technology. Here, we dive deep into the latest
        advancements, trends, and innovations across various tech domains,
        keeping you informed and inspired
      </p>
      </div>
      <Subscribe/>
    </section>
  );
}

export default About;
