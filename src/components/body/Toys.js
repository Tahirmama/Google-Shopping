import React, { useState } from "react"
import "./style.css"
import Toy from "../data/Toy.json"

const Toys = () => {
    console.log(Toy)
    const [no_of_data, set_no_of_data] = useState(6)
    const slice = Object.keys(Toy).slice(0, no_of_data)
    const loadMore = () => {
        set_no_of_data(no_of_data + no_of_data)
    }
    return (
        <div className="Head-container">

            <h1 className="Head">
                Toys
            </h1>
            <br />
            <div className="display-container">

                {slice.map(keyName => {      //object.keys array return krsa ana map na through usko acces karanga 
                    const Toy_S = Toy[keyName];
                    return (

                        <div className="innerContainer">

                            <img src={Toy_S.img} height={160} alt={Toy_S.name} className="ePics" />
                            <br />
                            <span className="ePrice">
                                {Toy_S.Prices}
                            </span>
                            <br />
                            <span className="eName">
                                {Toy_S.name}
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
export default Toys;