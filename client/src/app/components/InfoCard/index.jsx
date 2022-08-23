import "./style.css"
import { BsPencil } from "react-icons/bs";

const InfoCard = () => {
    return (
        <div className="infocard">
            <div className="infoHead">
                <h4>Your info</h4>
                <div>
                    < BsPencil size={15}/>
                </div>
            </div>

            <div className="info">
                <span>Status </span> <span>In relationship</span>
            </div>

            <div className="info">
                <span>Lives in </span> <span>Paris</span>
            </div>

            <div className="info">
                <span>Works at </span> <span>Openclassrooms</span>
            </div>

            <button className="button logout-button">
                Logout
            </button>
        </div>
    )
}

export default InfoCard