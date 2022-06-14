import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Rocket.css";

const Rocket = () => {
  const [Rocket, setRocket] = useState([]);
  const [search, setSearch] = useState("");
  const [searchdata, setSearchdata] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    setIsloading(true);
    fetch("https://api.spacexdata.com/v3/rockets")
      .then(res => res.json())
      .then(json => {
        setRocket(json);
        setSearchdata(json);
        setIsloading(false);
        // console.log("rocket json", json);
      });
  };
  const gotopage = (item: any) => {
    navigate(`/rocketdetails/${item.rocket_id}`);
  };
  const searchvalue = (eve: any) => {
    let a = eve.target.value;
    setSearch(a);
    console.log(a);
    const temp = searchdata.filter((item: any) =>
      // console.log("rocketname", item.rocket_name);
      item.rocket_name.toLowerCase().includes(a.toLowerCase())
    );
    setRocket(temp);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(eve: any) => searchvalue(eve)}
          style={{ marginLeft: "78%" }}
        />
      </div>
      {isloading ? (
        <span>Loading....</span>
      ) : (
        <div className="header">
          {Rocket.map((item: any, index: number) => (
            <div key={index}>
              <h3>{item?.rocket_name}</h3>
              <img
                src={item?.flickr_images[0]}
                alt=""
                style={{ height: 270, width: 270 }}
              />
              <br />
              <button id="btn" onClick={() => gotopage(item)}>
                Know More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rocket;
