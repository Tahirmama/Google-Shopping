import './App.css';
import Crafts_Hobbies from './body/Crafts&Hobbies';
import Electronics from './body/Electronic';
import Home_Decor from './body/HomeDecor';
import Kitchen from './body/Kitchen';
import Kitchen_Dining from './body/Kitchen&Dining';
import Toys from './body/Toys';
import { Pic } from './pic';
import Bar from "./appbar"

function App() {
  return (
    <div className="App">
      < Bar />
      <br />
      <Pic />
      <div className="container">
      <Electronics />
      <br />
      <Home_Decor />
      <br />
      <Kitchen_Dining />
      <br />
      <Toys />
      <br />
      <Crafts_Hobbies />
      <br />
      <Kitchen />
      </div>
    </div>
  );
}

export default App;
