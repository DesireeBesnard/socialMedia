import "./style.css"

const Post = ({data}) => {
    return(
        <div className="post">
            <img src={data.img} alt="" />

            <div className="post-react">
                {data.liked? <img src="img/like.png" alt="" /> : <img src="img/notlike.png" alt="" />}
                <img src="img/comment.png" alt="" />
                <img src="img/share.png" alt="" />
            </div>

            <span>{data.likes} likes</span>

            <div className="detail">
                <span>{data.name}</span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post