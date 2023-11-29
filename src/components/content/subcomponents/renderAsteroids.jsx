import AsteroidCard from './asteroidCard'
import { useState, useEffect } from 'react'

const api = 'https://api.nasa.gov/neo/rest/v1/feed'

export default function RenderAsteroids() {
    const [asteroids, setAsteroids] = useState(null)

    const date = new Date
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    
    // useEffect(() => {
    //     console.log('FETCH START')
    
    //   fetch(`${api}?start_date=${today}&api_key=5ZJ3OejyD5ck5WRlYKf93enq47HWWLPts5yiscjJ`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log('FETCH START2')
    //         setAsteroids(data)
    //     })
    // }, [])

    if (!asteroids) {
        console.log('NOPE')
        return
    }

    console.log(asteroids)

    return (
        <>
        <div className="asteroid-container">
                {Object.keys(asteroids.near_earth_objects).map(day => {
                    console.log(day)
                    return asteroids.near_earth_objects[day].map(asteroid => (
                        <AsteroidCard 
                            name={asteroid.name}
                            magniutde={asteroid.absolute_magnitude_h}
                            hazardous={asteroid.is_potentially_hazardous_asteroid}
                            approachDate={asteroid.close_approach_data[0].close_approach_date_full}
                            missDistance={asteroid.close_approach_data[0].miss_distance.miles}
                            estDiameter={`${asteroid.estimated_diameter.meters.estimated_diameter_min} - ${asteroid.estimated_diameter.meters.estimated_diameter_max}`}
                            key={asteroid.id}/>
                    ))
                })}
            </div>
        </>
    )
}