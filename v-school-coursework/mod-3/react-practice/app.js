import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
        <h1>Rhetta</h1>
        <p>I'm stuffed! And excited about the garden.</p>
        <ol>
            <li>Iceland</li>
            <li>New Zealand</li>
            <li>Japan</li>
        </ol>   
    </div>)
}

ReactDOM.render (
  <MyInfo />,
  document.getElementById("root")
)