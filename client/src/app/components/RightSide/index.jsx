import "./style.css"
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import TrendCard from "../TrendCard"
import ShareModal from "../ShareModal";

const RightSide = () => {

    const [modalOpened, setModalOpened] = useState(false)

    return(
        <div className="rightSide">
            <div className="navIcons">
                <img src="img/home.png" alt="" />
                <FiSettings size={25} />
                <img src="img/noti.png" alt="" />
                <img src="img/comment.png" alt="" />
            </div>

            <TrendCard />

            <button onClick={() => {setModalOpened(true)}} className="button r-button" >
                Share
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
    )
}

export default RightSide