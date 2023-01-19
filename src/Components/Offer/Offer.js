import "./Offer.css";
import Fade from "react-reveal/Fade";
// import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import { Offer_Video, Offer_Images } from "../index";

const Offer = (props) => {
  const side =
    props.index % 2 === 1
      ? "row flex-row-reverse bg-2 p-4 "
      : "row flex-row-reverse bg-2 p-4 ";

  return (
    <>
      <Fade bottom>
        <div className="offer mb-3">
          <div className="container">
            <details>
              <summary>
                <div className="smry row">
                  <div className="title col-10">
                    <h2 className="name mb-2 ">
                      {props.name}
                      <a
                        className="site fs-3 me-3 override"
                        href={props.face}
                        target="_blank"
                      >
                        <FaFacebook />
                      </a>

                      {props.inst ? (
                        <a
                          className="site fs-3 me-3 override"
                          href={props.inst}
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                      ) : (
                        <></>
                      )}
                    </h2>
                    <div className="date mb-3 ">
                      العرض ساري من {props.date_from} الى {props.date_to}
                    </div>
                  </div>

                  <div className="scroll-icon fs-1  col-2 d-flex align-items-center justify-content-center">
                    <div className="s-down">
                      <FaCaretDown />
                    </div>
                    <div className="s-up">
                      <FaCaretUp />
                    </div>
                  </div>
                </div>
              </summary>

              <div className={side}>
                <div className="photo col-lg-4 col-sm-12 d-flex align-items-center justify-content-center mb-3">
                  <img
                    className="img-fluid "
                    src={props.logo}
                    alt={props.name}
                  />
                </div>
                <div className="content col-lg-8 col-sm-12 ">
                  <div className="time">اوقات الدوام: {props.time}</div>
                  <div className="number">رقم المحل: {props.number}</div>
                  <div className="position mb-5">العنوان: {props.position}</div>

                  <p className="about">{props.descripition}</p>
                  <ul className="offers ">
                    {props.offers.map((offer) => (
                      <li className="mt-2">{offer}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {props.imgs ? <Offer_Images imgs={props.imgs} /> : <></>}
              {props.video ? <Offer_Video video={props.video} /> : <></>}
            </details>
          </div>
        </div>
      </Fade>
      {/* <Fade bottom>
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
      </Fade> */}
    </>
  );
};

export default Offer;
