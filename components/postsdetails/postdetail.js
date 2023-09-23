import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "./postdetail.module.css";
import BlogInfo from "../bloginfo/bloginfo";
import Social from "../socials/socials";
function PostDetail({ postData }) {
  console.log("postdata", postData);

  const imagepath = `/images/posts/${postData.slug}/${postData.image}`;

  return (
    <section className="section-center">
      <div className={styles.postContent}>
        <div className={styles.postHeader}>
          <p className={styles.category}>{postData.category}</p>
          <h1 className={styles.postTitle}>{postData.title}</h1>
          <div className={styles.personalInfo}>
            <BlogInfo
              author={postData.author}
              date={postData.date}
              time={postData.time}
            />
            <Social />
          </div>
        </div>
        <div className={styles.coverImage}>
          <Image src={imagepath} width={300} height={500} />
        </div>
      </div>
      <ReactMarkdown className={`${styles.postHeader} ${styles.postDetails}`}>
        {postData.content}
      </ReactMarkdown>
    </section>
  );
}

export default PostDetail;
