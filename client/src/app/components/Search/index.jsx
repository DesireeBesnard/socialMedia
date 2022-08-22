import './style.css'
import {BiSearch} from 'react-icons/bi'

const Search = () => {
    return (
        <div className="Logosearch">
            <img src="img/logo.png" alt="application logo" />
            <div className="search">
                <input type="text" placeholder="#Explore" />
                <div className="s-icon">
                    <BiSearch/>
                </div>
            </div>
        </div>
    )
}

export default Search