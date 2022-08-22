import "./style.css"
import Search from '../Search'
import ProfileCard from '../ProfileCard'

const ProfileSide = () => {
    return (
        <div className="profileside">
            <Search />
            <ProfileCard />
        </div>
    )
}

export default ProfileSide