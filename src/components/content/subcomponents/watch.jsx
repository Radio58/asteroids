import { useContext } from "react"
import { TrackedContext } from "../content"
import WatchedObject from "./watchedObject"

export default function Watch() {
    const { tracked, setTracked } = useContext(TrackedContext)
    
    console.log(tracked)

    return (
        <>
        <div className="watchlist">
            <ul>
                {Object.entries(tracked).map(([name, id]) => {
                    console.log([name, id])
                    return <WatchedObject name={name} id={parseInt(id)}/>
                })}
            </ul>
        </div>
        </>
    )
}