import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Launche.css";
const Launche = () => {
  const [Launches, setLaunches] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getLaunchesData();
  }, []);

  const getLaunchesData = () => {
    setIsloading(true);
    fetch("https://api.spacexdata.com/v3/launches")
      .then(res => res.json())
      .then(json => {
        // console.log("Launchesjson", json);
        setLaunches(json);
        setSearch(json);
        setIsloading(false);
      });
  };
  const gotoPage = (item: any) => {
    navigate(`/Launchedetails/${item.flight_number}`);
  };
  const searchvalue = (e: any) => {
    let a = e.target.value;
    setSearchdata(a);
    console.log(a);
    const temp = search.filter(
      // console.log("mission_name", item.mission_name);
      (item: any) => item.mission_name.toLowerCase().includes(a.toLowerCase())
    );
    setLaunches(temp);
  };
  return (
    <div className="Launches_header">
      <div style={{ marginLeft: "78%" }}>
        <input
          className="launchsearch"
          placeholder="Search..."
          value={searchdata}
          onChange={(e: any) => searchvalue(e)}
        />
      </div>
      {isloading ? (
        <span>Loading....</span>
      ) : (
        <div className="launches-sec">
          {Launches.map((item: any, index: number) => (
            <div key={index}>
              <p className="mission_name">{item?.mission_name}</p>
              <img
                src={item?.links.mission_patch}
                style={{ width: "200px", height: "200px" }}
              />
              <br></br>
              <button className="btn1" onClick={() => gotoPage(item)}>
                Know More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Launche;
