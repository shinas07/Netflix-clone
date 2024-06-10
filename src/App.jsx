import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import { action,horror,originals } from './urls';
import './App.css'
import RowPost from "./Components/RowPost/RowPost";


function App(){
  return(
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSize/>
      <RowPost url={horror} title='Horror' isSize/>
    </div>
  )
}
export default App;