import "./style.css"
import ProfileSide from "../../components/ProfileSide"

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="rightSide">Rightside</div>
        </div>
    )
}

export default Home