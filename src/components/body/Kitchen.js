import React, { useState } from "react"
import "./style.css"
import kitchen from "../data/kitchen.json"

const Kitchen = () => {
    console.log(kitchen)
    const [no_of_data, set_no_of_data] = useState(6)
    const slice = Object.keys(kitchen).slice(0, no_of_data)
    const loadMore = () => {
        set_no_of_data(no_of_data + no_of_data)
    }
    return (
        <div className="Head-container">
            <h1 className="Head">
                Kitchen Appliances
            </h1>
            <br />
            <div className="display-container">

{slice.map(keyName => {      //object.keys array return krsa ana map na through usko acces karanga 
    const kitchen_items = kitchen[keyName];
    return (

        <div className="innerContainer">

            <img src={kitchen_items.img} height={160} alt={kitchen_items.name} className="ePics" />
            <br />
            <span className="ePrice">
                {kitchen_items.Prices}
            </span>
            <br />
            <span className="eName">
                {kitchen_items.name}
            </span>
            <br />
        </div>

    )
})}
</div>
<br /><br /> <br />
<button onClick={() => loadMore()} className="viewmore" > View more </button>
<br />
        </div>

    )
}
export default Kitchen;