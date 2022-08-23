import "./style.css"
import Search from '../Search'
import ProfileCard from '../ProfileCard'
import FollowersCard from '../FollowersCard'

const ProfileSide = () => {
    return (
        <div className="profileside">
            <Search />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileSide