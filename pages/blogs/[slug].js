import { getPostsFiles, singlePostData } from "@/helpers/posts-utils";
import PostDetail from "../../components/postsdetails/postdetail";

function BlogDetailsPage(props) {
  return <PostDetail postData={props.post}/>
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = singlePostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilesNames = getPostsFiles();

  const slugs = postFilesNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default BlogDetailsPage;
