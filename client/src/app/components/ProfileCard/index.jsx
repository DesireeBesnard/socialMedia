import "./style.css"

const ProfileCard = () => {

    let profilePage = true;

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

                    <div className="vl"></div>

                    <div className="follow">
                        <span>300</span>
                        <span>Followers</span>
                    </div>

                    {profilePage && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            { profilePage? '' : <span>My profile</span>}

        </div>
    )
}

export default ProfileCard