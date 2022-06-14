import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Launchedetails = () => {
  const navigate = useNavigate();
  const [launchedetail, setLaunchedetail]: any = useState({});
  let param = useParams();
  useEffect(() => {
    gotodetails();
  }, []);

  const gotodetails = () => {
    fetch(`https://api.spacexdata.com/v3/launches/${param.flight_number}`)
      .then(res => res.json())
      .then(json => {
        setLaunchedetail(json);
        console.log("launchedetail json", json);
      });
  };

  const gotoback = () => {
    navigate("/launche");
  };

  return (
    <div>
      <div className="l_header">
        <h1>
          <span>Mission Name :</span> {launchedetail?.mission_name}
        </h1>
        <img
          src={launchedetail.links?.mission_patch_small}
          alt="jas"
          style={{ width: "200px", height: "200px" }}
        />
        <p>
          <span> Launche Year :</span>
          {launchedetail?.launch_year}
        </p>
        <p>
          <span> Launch Date Unix :</span>
          {launchedetail?.launch_date_unix}
        </p>
        <p>
          <span>Details :</span>
          {launchedetail?.details}
        </p>
        <br />
        <button className="btn1" onClick={() => gotoback()}>
          Go To Back
        </button>
      </div>
    </div>
  );
};

export default Launchedetails;
