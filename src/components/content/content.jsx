import RenderAsteroids from "./subcomponents/renderAsteroids";
import Watch from "./subcomponents/watch"

export default function Content() {

    return (
        <>
        <Watch/>
        <div className="content-container">
            <div className="controls">
                <div className="next-week">
                    <button className="next">Next week</button>
                </div>
                <div className="date-range">
                    <input type="date" value="2000-01-01"></input>
                </div>
            </div>
            <RenderAsteroids/>
        </div>
        </>
    )
}