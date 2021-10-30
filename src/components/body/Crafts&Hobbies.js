import React, { useState } from "react"
import "./style.css"
import crafts_hobbies from "../data/crafts_hobbies.json"

const Crafts_Hobbies = () => {
    console.log(crafts_hobbies)
    const [no_of_data, set_no_of_data] = useState(6)
    const slice = Object.keys(crafts_hobbies).slice(0, no_of_data)
    const loadMore = () => {
        set_no_of_data(no_of_data + no_of_data)
    }
    return (
        <div className="Head-container">
            <h1 className="Head">
                Crafts & Hobbies
            </h1>
            <br />
            <div className="display-container">

                {slice.map(keyName => {      //object.keys array return krsa ana map na through usko acces karanga 
                    const crf_hbs = crafts_hobbies[keyName];
                    return (

                        <div className="innerContainer">

                            <img src={crf_hbs.img} height={160} alt={crf_hbs.name} className="ePics" />
                            <br />
                            <span className="ePrice">
                                {crf_hbs.Prices}
                            </span>
                            <br />
                            <span className="eName">
                                {crf_hbs.name}
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
export default Crafts_Hobbies;