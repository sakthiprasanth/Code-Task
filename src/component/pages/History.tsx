import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/History.css";

const History = () => {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [searchdata, setSearchdata] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    setIsloading(true);
    fetch("https://api.spacexdata.com/v3/history")
      .then(res => res.json())
      .then(json => {
        setHistory(json);
        setSearchdata(json);
        // console.log("history json", json);
        setIsloading(false);
      });
  };
  const gotopage = (item: any) => {
    navigate(`/historydetails/${item.id}`);
  };
  const searchvalue = (eve: any) => {
    let a = eve.target.value;
    setSearch(a);
    console.log(a);
    const temp = searchdata.filter((item: any) =>
      // console.log("titlename", item.title);
      item.title.toLowerCase().includes(a.toLowerCase())
    );
    setHistory(temp);
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
        <div className="history_header">
          {history.map((item: any, index: number) => (
            <div key={index} className="history_sec">
              <h3>{item?.title}</h3>
              <p>Event_date_unix:{item?.event_date_unix}</p>
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

export default History;
