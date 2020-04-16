import React from "react"

function Spot(props) {
    return (
        <div className = "placeContainer" style = {{backgroundColor: 
            props.timeToGo === "Spring" ? "#FAC42C"  
            : props.timeToGo === "Summer" ? "#838205" 
            : props.timeToGo === "Fall" ? "#BF4D1D"
            : "#12375C"
        }}>
            <h2>{props.spot.place}</h2>
            <h4>{props.spot.price}</h4>
            <h4>{props.spot.timeToGo}</h4>
        </div>
    )
}

export default Spot