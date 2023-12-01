import { createContext, useContext, useEffect, useState } from "react";
import RenderAsteroids from "./subcomponents/renderAsteroids";
import Watch from "./subcomponents/watch"

export const TrackedContext = createContext() 

export default function Content() {
    const [tracked, setTracked] = useState(localStorage)
    const [activePage, setActivePage] = useState(null)

    console.log(tracked)
    
    return (
        <>
        <TrackedContext.Provider value={{tracked, setTracked, activePage, setActivePage}}>
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
        </TrackedContext.Provider>
        </>
    )
}