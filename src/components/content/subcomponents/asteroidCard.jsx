import { useContext } from 'react'
import { TrackedContext } from '../content'

export default function AsteroidCard({name, magniutde, hazardous, approachDate, missDistance, estDiameter, id}) {
    const { tracked, setTracked } = useContext(TrackedContext)
    // if tracked change button name to Untrack

    const handleClick = () => {
        localStorage.setItem(name, id)
        setTracked(localStorage)
    }

    const yesno = (yn) => {

    }

    return (
        <>
        <div className="asteroid-card">
            <div className="name">
                <h3>{name}</h3>
            </div>
            <div className="details">
                <ul className="list">
                    <li>Magnitude: {magniutde}</li>
                    <li>Potentially Hazardous: <span className={hazardous ? 'is-hazardous' : 'not-hazardous'}>{hazardous ? 'Yes' : 'No'}</span></li>
                    <li>Close Approach: {approachDate}</li>
                    <li>Miss Distance: {`${parseInt(missDistance)} miles`}</li>
                    <li>Estimated Diameter: {estDiameter}</li>
                </ul>
            </div>
            <div className="card-controls">
                <button className="track" onClick={handleClick}>Track</button>
            </div>
        </div>
        </>
    )
}