import Link from "next/link";
import styles from "./singleblog.module.css";
import Image from "next/image";
import BlogInfo from "../bloginfo/bloginfo";
function SingleBlog({
  title,
  date,
  image,
  excerpt,
  latest,
  category,
  slug,
  author,
  time,
}) {
  
  const imgPath = `/images/posts/${slug}/${image}`;

  console.log("imagepath".imgPath);
  return (
    <Link
      href={`/blogs/${slug}`}
      className={`${!latest ? styles.singleBlog : styles.twoColSingleBlog}`}
    >
      <div className={styles.image}>
        <Image width={450} height={450} alt="blog thumbnail" src={imgPath} />
      </div>
      <div className={styles.blogInfo}>
        <button className={`${styles.categoryBtn} btn`}>{category}</button>
        <h3 className={styles.blogTitle}>{title}</h3>
        <p className={styles.blogDesc}>{excerpt}</p>

        <BlogInfo author={author} time={time} date={date} />
      </div>
    </Link>
  );
}
export default SingleBlog;
