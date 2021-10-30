import React,{useState} from "react"
import "./style.css"
import kitchen_dining from "../data/kitchen_dining.json"

const Kitchen_Dining = () => {
    console.log(kitchen_dining)
    const [no_of_data, set_no_of_data] = useState(6)
    const slice = Object.keys(kitchen_dining).slice(0, no_of_data)
    const loadMore = () => {
        set_no_of_data(no_of_data + no_of_data)
    }
    return (
        <div className="Head-container">
            <h1 className="Head">
                Kitchen & Dining
            </h1>
            <br />
            <div className="display-container">

{slice.map(keyName => {      //object.keys array return krsa ana map na through usko acces karanga 
    const kitch = kitchen_dining[keyName];
    return (

        <div className="innerContainer">

            <img src={kitch.img} height={160} alt={kitch.name} className="ePics" />
            <br />
            <span className="ePrice">
                {kitch.Prices}
            </span>
            <br />
            <span className="eName">
                {kitch.name}
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
export default Kitchen_Dining;