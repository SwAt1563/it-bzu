import "./About_us.css";
import { Team } from "../../Sections";
import { ref, set, get, child } from "firebase/database";
import { v4 as uuidv4 } from "uuid";


const About_us = (props) => {
  

  const handle_insert = (event) => {
    event.preventDefault();

    const target = event.target;

    const link = target.link.value;
    const problem = target.problem.value;

    const currDate = new Date().toLocaleDateString();
    const id = uuidv4();

    const putData = () => {
      set(ref(props.database, `problems/${id}`), {
        link: link,
        problem: problem,
        date: currDate,
      });
    };

    putData();
    target.link.value = "";
    target.problem.value = "تم الارسال";

  };

  return (
    <>
      <Team />

      <div className="second_part container">
        <div className="apply mt-5 p-5">
          <div className="apply_title">
            <h3 className="text-center mb-3">
              اكتب تفاصيل المشكلة التي تريد أن نجد لها حل وان تملك حلول فيمكنك
              اقتراحها
            </h3>
          </div>
          <form className="row " onSubmit={handle_insert}>
            <div className="input-group">
              <button type="submit" class="btn btn-secondary rounded-0 w-25">
                ارسل
              </button>

              <input
                type="text"
                id="link"
                className="form-control rounded-0"
                placeholder="رابط للتواصل معك - اختياري - "
                aria-label="Search"
                aria-describedby="search-addon"
                
              />
            </div>
            <div className="input-group">
              <textarea
                className=" form-control rounded-0  mt-1"
                id="problem"
                rows="3"
                placeholder="تفاصيل المشكلة"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About_us;
