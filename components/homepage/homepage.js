import Featured from "./featured"
import Latest from "./latest"

import Subscribe from "./subscribe"
function HomePage({posts}){
    
    const latestPosts =posts.filter((post) => post.isLatest)


    return(
        <>
        
        <Featured posts={posts}/>
        <Latest posts ={latestPosts}/>
        <Subscribe/>
        </>
    )
}

export default HomePage