import "./style.css"
import ProfileSide from "../../components/ProfileSide"
import PostSide from "../../components/PostSide"
import RightSide from "../../components/RightSide"

const Home = () => {
    return (
        <div className="Home">
            < ProfileSide />
            < PostSide />
            < RightSide />
        </div>
    )
}

export default Home