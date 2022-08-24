import "./style.css"
import { BsPencil } from "react-icons/bs";
import { useState } from "react";
import ProfileModal from "../ProfilModal";

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className="infocard">
            <div className="infoHead">
                <h4>Your info</h4>
                <div>
                    < BsPencil size={15} onClick={() => {setModalOpened(true)} }/>
                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
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