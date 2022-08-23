import './style.css'
import {Followers} from "../../data/dataFollowers"

const FollowersCard = () => {
    return (
        <div className='followers-card'>
            <h3>who is following you</h3>
            {Followers.map((follower, id) => {
                return(
                    <div className="follower">
                        <div>
                            <img className="follower-image" src={follower.image} alt="follower id" />
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard