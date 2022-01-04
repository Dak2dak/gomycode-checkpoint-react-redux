import React from "react";
import './Style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from './components/ListTask';
import Filter from "./components/Filter";

const App = () => {
  return (
    <div className="container--list">
        <Filter />
        <ListTask />
    </div>
  );
}

export default App;
