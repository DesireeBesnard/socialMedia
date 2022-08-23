
import FollowersCard from "../FollowersCard"
import InfoCard from "../InfoCard"
import Search from "../Search"

const ProfileLeft = () => {
    return (
        <div className="profileside">
            <Search />
            <InfoCard />
            <FollowersCard />
        </div>

    )
}

export default ProfileLeft
