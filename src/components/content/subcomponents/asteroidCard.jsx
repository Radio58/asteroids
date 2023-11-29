export default function AsteroidCard({name, magniutde, hazardous, approachDate, missDistance, estDiameter}) {

    return (
        <>
        <div className="asteroid-card">
            <div className="name">
                <h3>{name}</h3>
            </div>
            <div className="details">
                <ul>
                    <li>Magnitude: {magniutde}</li>
                    <li>Potentially Hazardous: {hazardous}</li>
                    <li>Close Approach: {approachDate}</li>
                    <li>Miss Distance: {missDistance}</li>
                    <li>Estimated Diameter: {estDiameter}</li>
                </ul>
            </div>
            <div className="card-controls">
                <button className="track">Track</button>
            </div>
        </div>
        </>
    )
}