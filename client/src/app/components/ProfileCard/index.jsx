import "./style.css"

const ProfileCard = () => {
    return(
        <div className="profile-card">
            <div className="profile-images">
                <img src="img/cover.jpg" alt="Profile cover" />
                <img src="img/profileImg.jpg" alt="Profile" />
            </div>

            <div className="profile-name">
                <span>Désirée Besnard</span>
                <span>Frontend developer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>600</span>
                        <span>Following</span>
                    </div>
                    <div className="vl">
                    </div>
                    <div className="follow">
                        <span>300</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>

            <span>My profile</span>
        </div>
    )
}

export default ProfileCard