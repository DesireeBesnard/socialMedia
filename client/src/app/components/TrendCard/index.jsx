import "./style.css"
import { TrendData } from "../../data/TrendData"

const TrendCard = () => {
    return(
        <div className="trendcard">
            <h3>Trends for you</h3>
            {TrendData.map((trend) => {
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares} shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard