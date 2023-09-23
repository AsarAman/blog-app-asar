import SingleBlog from "./singleblog";
import styles from "./featured.module.css";
function Featured({ posts }) {
  const featuredPosts = posts.filter((post) => post.isFeatured === true);
  

  return (
    <section className={`${styles.section} section-center`}>
      <h2>Featured Blogs</h2>

      <div className={styles.blogs}>
        {featuredPosts.map((blog, index) => {
          return <SingleBlog key={index} {...blog} />;
        })}
      </div>
    </section>
  );
}

export default Featured;
