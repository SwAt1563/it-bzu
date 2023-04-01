import "./Services.css";
import { Service } from "../../Components";
import Fade from "react-reveal/Fade";
const Services = () => {
  return (
    <>
      <div className="services p-5">
        <div className="container">
          <div className="title mb-5 text-center ">
            <h1> الخدمات التي يوفرها الموقع</h1>
          </div>
          <hr className="mb-5" />

          <div className="cont d-flex align-items-center justify-content-center">
            <div className="row ">
              <Service title="تبديل الشعب" link="/switch_courses" />
              <Service title="جروب لمشروعك" link="/project_groups" />
              <Service title="جد غرضك" link="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
