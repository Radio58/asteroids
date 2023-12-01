import { useContext } from "react"
import { TrackedContext } from "../content"

export default function WatchedObject({name, id}) {
    const { setActivePage } = useContext(TrackedContext)
    

    return (
        <>
        <li className="watched-object" onClick={setActivePage(id)}>
            <h3>{name}</h3>
        </li>
        </>
    )
}