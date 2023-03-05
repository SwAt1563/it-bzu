import "./Course_Person.css";

import Fade from "react-reveal/Fade";
import { FaFacebook } from "react-icons/fa";

const Course_Person = (props) => {
  return (
    <>
      <Fade>
        <div className="course_person  col-lg-4 col-md-4 col-sm-12 ms-5 mt-3">
          <div className="card pe-2 p-3">
            <div className="title">
              <h2 className="name mb-2 ">
                {props.name}
                <a
                  className="site fs-3 me-3 override"
                  href={props.facebook}
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </h2>
              <div className="date mb-3 ">تاريخ النشر : {props.date}</div>
            </div>
            <div className="from mb-2"> الشعبة الموجود فيها: {props.from}</div>
            <div className="to mb-2">الشعبة التي اريدها : {props.to}</div>
            <div className="desc mb-2">
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Course_Person;
