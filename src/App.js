import React from "react";
import './Style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div className="container--list">
        <ListTask />
    </div>
  );
}

export default App;
