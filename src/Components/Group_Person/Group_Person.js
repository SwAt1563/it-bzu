import "./Group_Person.css";

import Fade from "react-reveal/Fade";
import { FaFacebook, FaCaretDown, FaCaretUp } from "react-icons/fa";

const Group_Person = (props) => {
  return (
    <>
      <Fade bottom>
        <div className="group_person mb-3">
          <div className="container p-0 mt-3">
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
                    </h2>
                    <div className="date mb-3 ">تاريخ النشر {props.date}</div>
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

              <div className="row bg-2 p-4">
                <div className="content col-lg-8 col-sm-12 ">
                  <div className="email"> الايميل: {props.email}</div>

                  <p className="about mt-5">{props.desc}</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Group_Person;
