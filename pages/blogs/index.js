import { getAllPosts } from "@/helpers/posts-utils"
import Blogs from "../../components/blogspage/allblogs"
import Head from "next/head"
function AllBlogs (props){
    return(
        <>
        <Head>
            <title>All Blogs</title>
        </Head>
        <Blogs posts={props.posts}/>
        </>
    )
}

export function getStaticProps(){

    const allPosts = getAllPosts()
    return{
        props:{
            posts: allPosts
        }
    }

}

export default AllBlogs