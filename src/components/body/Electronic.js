import React, { useState } from "react"
import "./style.css"
import electronics from "../data/electronics.json"

const Electronics = () => {
    console.log(electronics)
    const [no_of_data, set_no_of_data] = useState(6)
    const slice = Object.keys(electronics).slice(0, no_of_data)
    const loadMore = () => {
        set_no_of_data(no_of_data + no_of_data)
    }
    return (
        <div className="Head-container">
            <h1 className="Head">
                Electronics
            </h1>
            <br />
            <div className="display-container">

                {slice.map(keyName => {      //object.keys array return krsa ana map na through usko acces karanga 
                    const electronic = electronics[keyName];
                    return (

                        <div className="innerContainer">

                            <img src={electronic.img} height={160} alt={electronic.name} className="ePics" />
                            <br />
                            <span className="ePrice">
                                {electronic.Prices}
                            </span>
                            <br />
                            <span className="eName">
                                {electronic.name}
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
export default Electronics