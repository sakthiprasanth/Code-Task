import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Launche from "./component/pages/Launche";
import Rocket from "./component/pages/Rocket";
import History from "./component/pages/History";
import Rocketdetails from "./details/Rocketdetails";
import Launchedetails from "./details/Launchedetails";
import Navbar from "./component/Navbar";
import Historydetails from "./details/Historydetails";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rocket" element={<Rocket />}></Route>
        <Route path="/launche" element={<Launche />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route
          path="/rocketdetails/:rocket_id"
          element={<Rocketdetails />}
        ></Route>
        <Route
          path="/launchedetails/:flight_number"
          element={<Launchedetails />}
        ></Route>
        <Route path="/historydetails/:id" element={<Historydetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
