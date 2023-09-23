import { getAllPosts } from "../helpers/posts-utils";
import HomePage from "../components/homepage/homepage";
import Head from "next/head";
function Home(props) {
  return (
    <>
      {" "}
      <Head><title>Asar Blog</title></Head> <HomePage posts={props.posts} />;
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
}

export default Home;
