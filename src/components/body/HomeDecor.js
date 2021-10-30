import React, { useState } from "react"
import "./style.css"
import HomeDecor from "../data/HomeDecor.json"
const Home_Decor = () => {
    console.log(HomeDecor)
    const [no_of_data, set_no_of_data] = useState(6)
    const slice = Object.keys(HomeDecor).slice(0, no_of_data)
    const loadMore = () => {
        set_no_of_data(no_of_data + no_of_data)
    }
    return (
        <div className="Head-container">
            <br /><br />
            <h1 className="Head">
                Home Decor
            </h1>
            <br />
            <div className="display-container">

                {slice.map(keyName => {      //object.keys array return krsa ana map na through usko acces karanga 
                    const HomeD = HomeDecor[keyName];
                    return (

                        <div className="innerContainer">

                            <img src={HomeD.img} height={160} alt={HomeD.name} className="ePics" />
                            <br />
                            <span className="ePrice">
                                {HomeD.Prices}
                            </span>
                            <br />
                            <span className="eName">
                                {HomeD.name}
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
export default Home_Decor