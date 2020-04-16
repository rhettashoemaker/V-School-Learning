import React from "react"
import Spot from "Spot"
import vacationSpotsData from "./vacationSpotsData"

function App () {
    const spotComponents = vacationSpotsData.map(item => <Spot key = {item.place} spot = {item}/>)
    return (
        <div className="wholeContainer">
            {spotComponents}
        </div>
    )
}
export default App