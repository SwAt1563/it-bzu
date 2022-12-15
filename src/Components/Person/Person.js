import "./Person.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Person = (props) => {
  const side = props.index % 2 === 1 ? "row flex-row-reverse bg-2" : "row";
  return (
    <>
      <Fade bottom>
        <div className="person mb-5">
          <div className="container">
            <div className={side}>
              <div className="photo col-lg-4 col-sm-12 text-center mb-3">
                <img
                  className="img-fluid "
                  src={props.photo}
                  alt={props.name}
                />
              </div>
              <div className="content col-lg-8 col-sm-12 text-center">
                <h2 className="name mb-2">{props.name}</h2>
                <h6 className="status mb-5">
                  <a className="link" href={props.contact}>
                    للتواصل
                  </a>
                </h6>
                <p className="about">{props.about}</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Person;
