import Posts from "../Posts"
import PostShare from "../PostShare"
import "./style.css"

const PostSide = () => {
    return(
        <div className="postside">
            <PostShare />
            <Posts />
        </div>
    )
}

export default PostSide