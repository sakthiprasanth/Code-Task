import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../component/css/Rocket.css";

const Rocketdetails = () => {
  const navigate = useNavigate();
  const [rocketdetail, setRocketdetail]: any = useState({});
  let param = useParams();
  useEffect(() => {
    gotodetails();
  }, []);

  const gotodetails = () => {
    fetch(`https://api.spacexdata.com/v3/rockets/${param.rocket_id}`)
      .then(res => res.json())
      .then(json => {
        setRocketdetail(json);
        // console.log("rocketdetail json", json);
      });
  };

  const gotoback = () => {
    navigate("/rocket");
  };

  return (
    <div className="d-header">
      <h2>{rocketdetail?.rocket_name}</h2>
      <img
        src={rocketdetail?.flickr_images}
        alt=""
        style={{ height: 300, width: 300 }}
      />
      <p style={{ color: "inherit" }}>{rocketdetail?.description}</p>
      <div>
        <button onClick={() => gotoback()}>Go To Back</button>
      </div>
    </div>
  );
};

export default Rocketdetails;
