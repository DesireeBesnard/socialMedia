import "./style.css"
import {postsData} from "../../data/postsData"
import Post from "../Post"

const Posts = () => {
    return(
        <div className="posts">
            {postsData.map((post, id) => {
                return <Post data= {post} id={id}/>
            })}
        </div>
    )
}

export default Posts