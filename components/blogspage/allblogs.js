import SingleBlog from "../homepage/singleblog";
import styles from "./allblogs.module.css";
import Subscribe from "../homepage/subscribe";
import { useState } from "react";

function Blogs({ posts }) {
  const [blogPosts, setBlogPosts] = useState(posts);
  const categories = ["All", "HTML", "CSS", 'JS'];
  function filterBYCategory(category) {
    if (category === "All") {
      setBlogPosts(posts);
      return;
    }
    const filteredPosts = posts.filter((post) => post.category === category);

    setBlogPosts(filteredPosts);
  }

  return (
    <section className={`${styles.section} section-center`}>
      <div className={styles.categories}>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => filterBYCategory(category)}
              className="btn"
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className={styles.allBlogs}>
        {blogPosts.map((item, index) => {
          return <SingleBlog {...item} key={index} latest />;
        })}
      </div>
      <Subscribe />
    </section>
  );
}

export default Blogs;
