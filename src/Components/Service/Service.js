import "./Service.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Service = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
   
      <Link
        to={props.link}
        class={` service card col-lg-6 col-md-6 col-sm-12 text-center p-5 m-2 ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
        </div>
      </Link>
     
    </>
  );
};

export default Service;
