import "./style.css"
import { FiSettings } from "react-icons/fi";
import TrendCard from "../TrendCard"

const RightSide = () => {
    return(
        <div className="rightSide">
            <div className="navIcons">
                <img src="img/home.png" alt="" />
                <FiSettings size={25} />
                <img src="img/noti.png" alt="" />
                <img src="img/comment.png" alt="" />
            </div>

            <TrendCard />

            <button className="button r-button">
                Share
            </button>
        </div>
    )
}

export default RightSide