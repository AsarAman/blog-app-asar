import SingleBlog from "./singleblog";
import styles from "./latest.module.css";
function Latest({posts}) {
 
  return (
    <section className={`${styles.section} section-center`}>
      <h2 className={styles.h2}>Latest Blogs</h2>
      <div className={styles.latestBlogs}>
        {posts.map((item, index) => {
          return <SingleBlog latest key={index} {...item}></SingleBlog>;
        })}
      </div>
    </section>
  );
}

export default Latest;
