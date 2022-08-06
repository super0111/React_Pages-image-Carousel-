import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Submit1 from "./components/Submit1";
import Submit2 from "./components/Submit2";
import Submit3 from "./components/Submit3";
import Cartegory from "./components/Cartegory";
import Details1 from "./components/Details1";
import Details2 from "./components/Details2";
import "./components/content/index.scss";
import "./components/content/products.scss";


function App() {
  return (
    <div className="app">
      <div className="App_body">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Submit1/>} />
            <Route exact path="/submit1" element={ <Submit1/>} />
            <Route exact path="/submit2" element={ <Submit2 />} />
            <Route exact path="/submit3" element={ <Submit3 />} />
            <Route exact path="/cartegory" element= {<Cartegory />} />
            <Route exact path="/details1" element={ <Details1 />} />
            <Route path="/details2" element={ <Details2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
