import "./Offer.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const Offer = (props) => {
  const side =
    props.index % 2 === 1
      ? "row flex-row-reverse bg-2 p-4 "
      : "row flex-row-reverse bg-2 p-4 ";
  return (
    <>
      <Fade bottom>
        <div className="offer mb-5">
          <div className="container">
            <div className={side}>
              <div className="photo d-flex align-items-center justify-content-center col-lg-4 col-sm-12  mb-3">
                <img className="img-fluid " src={props.logo} alt={props.name} />
              </div>
              <div className="content col-lg-8 col-sm-12 ">
                <h2 className="name mb-2">
                  {props.name}
                  <a className="site fs-3 me-2" href={props.site}>
                    <FaFacebook />
                  </a>
                </h2>

                <div className="date mb-3">
                  العرض ساري من {props.date_from} الى {props.date_to}
                </div>
                <div className="time">اوقات الدوام: {props.time}</div>
                <div className="number">رقم المحل: {props.number}</div>
                <div className="position mb-5"> العنوان: {props.position}</div>

                <p className="about">{props.descripition}</p>
                <ul className="offers ">
                  {props.offers.map((offer) => (
                    <li>{offer}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Offer;
