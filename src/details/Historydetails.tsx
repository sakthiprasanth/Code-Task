import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../component/css/History.css";

const Historydetails = () => {
  const navigate = useNavigate();
  const [historydetail, setHistorydetail]: any = useState({});
  let param = useParams();
  useEffect(() => {
    gotodetails();
  }, []);

  const gotodetails = () => {
    fetch(`https://api.spacexdata.com/v3/history/${param.id}`)
      .then(res => res.json())
      .then(json => {
        setHistorydetail(json);
        console.log("Historydetail json", json);
      });
  };

  const gotoback = () => {
    navigate("/history");
  };

  return (
    <div className="history_detail">
      <h2>
        <span>Title :</span>
        {historydetail?.title}
      </h2>
      <p style={{ color: "inherit" }}>
        <span> Event_date_unix :</span>
        {historydetail?.event_date_unix}
      </p>
      <p style={{ color: "inherit" }}>
        <span>Event_date_utc :</span>
        {historydetail?.event_date_utc}
      </p>
      <p style={{ color: "inherit" }}>
        <span>Details :</span>
        {historydetail?.details}
      </p>
      <div>
        <button onClick={() => gotoback()}>Go To Back</button>
      </div>
    </div>
  );
};

export default Historydetails;
