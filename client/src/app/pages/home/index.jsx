import "./style.css"
import ProfileSide from "../../components/ProfileSide"
import PostSide from "../../components/PostSide"

const Home = () => {
    return (
        <div className="Home">
            < ProfileSide />
            < PostSide />
            <div className="rightSide">Rightside</div>
        </div>
    )
}

export default Home