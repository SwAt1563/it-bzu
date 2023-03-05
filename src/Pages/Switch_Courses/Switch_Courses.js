import "./Switch_Courses.css";
import { useState, useEffect } from "react";

import { ref, set, get, child } from "firebase/database";
import { Course_Person } from "../../Components/index";

const Switch_Courses = (props) => {
  const [isInsert, setIsInsert] = useState(false);
  const [search_data, setSearch_data] = useState(null);
  const [search_empty, setSearch_empty] = useState("");

  const handle_insert = (event) => {
    event.preventDefault();

    const target = event.target;

    const course_id = target.course_id.value.toLowerCase();
    const name = target.name.value;
    const from = target.from.value;
    const to = target.to.value;
    const facebook = target.facebook.value;
    const desc = target.desc.value;

    const currDate = new Date().toLocaleDateString();

    const putData = () => {
      set(ref(props.database, `switch_courses/${course_id}/${from}/${name}`), {
        name: name,
        from: from,
        to: to,
        facebook: facebook,
        desc: desc,
        date: currDate,
      });
    };

    putData();
    target.course_id.value = "";
    target.name.value = "";
    target.from.value = "";
    target.to.value = "";
    target.facebook.value = "";
    target.desc.value = "";

    setIsInsert((current) => true);
  };

  const handle_search = async (event) => {
    event.preventDefault();

    const target = event.target;

    const course_id = target.search_course.value.toLowerCase();
    const course_section = target.search_course_section.value;
    if (course_id === "") {
      return;
    }

    const dbRef = ref(props.database);

    let get_url = "";

    if (course_section === "") {
      get_url = `switch_courses/${course_id}`;
    } else {
      get_url = `switch_courses/${course_id}/${course_section}`;
    }

    let arr = null;
    await get(child(dbRef, get_url))
      .then((snapshot) => {
        if (snapshot.exists()) {
          if (course_section === "") {
            arr = [];
            Object.values(snapshot.val()).map((item) => {
              Object.values(item).map((per) => {
                arr = [...arr, per];
              });
            });
          } else {
            arr = Object.values(snapshot.val()).map((item) => ({
              name: item.name,
              date: item.date,
              facebook: item.facebook,
              to: item.to,
              from: item.from,
              desc: item.desc,
            }));
          }

          arr.sort(function (a, b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
          });
        } else {
          console.log("No data available");
          setSearch_empty(() => "لا يوجد طلاب مسجلين لهذا المساق");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    setSearch_data(
      arr?.map((person, index) => {
        //console.log({ person });
        return (
          <Course_Person
            index={index}
            key={index}
            name={person.name}
            facebook={person.facebook}
            desc={person.desc}
            date={person.date}
            from={person.from}
            to={person.to}
          />
        );
      })
    );

    console.log({ search_data });
  };

  return (
    <>
      <div className="switch_courses p-5">
        <div className="container">
          <div className="title mb-5 text-center">
            <h1> تبديل الشعب</h1>
          </div>
          <hr className="mb-5" />

          <div className="descripition  text-center text-md-end">
            هذه الميزة خاصة للطلاب الذين يريدون تبديل شعبتهم الحالية لمساق ما مع
            شعبة اخرى لنفس المساق، ولكن هذه الشعبة ممتلئة لذلك تقوم بالبحث عن
            الشعبة التي تريد الانتقال اليها وان كان هناك اشخاص اخرون يريدون ان
            يخرجوا من هذه الشعبة تستطيع ان تتواصل معهم، لكي تقوموا بتبديل شعبكم
            مع بعضكم البعض، وان لم تجد اشخاص تستطيع ان تدخل المعلومات الخاصة بك
            وما هي الشعبة الحالية التي توجد بها وما هي الشعبة التي تريد الانتقال
            اليها، ليتسنى للاخرين عند البحث ايجادك على القائمة والتواصل معك
          </div>

          <div className="insert mt-5">
            <form className="row" onSubmit={handle_insert}>
              <div className="col-md-6 col-lg-6 mb-3">
                <label for="course_id">رمز مادة المشروع</label>
                <input
                  type="text"
                  className="form-control"
                  id="course_id"
                  placeholder="رمز المادة"
                  required
                />
              </div>
              <div className=" col-md-6 col-lg-6 mb-3 ">
                <label for="name"> ما هو اسمك </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=" ادخل اسمك"
                  required
                />
              </div>
              <div className=" col-md-6 col-lg-6 mb-3 ">
                <label for="facebook"> رابط حساب الفيس بوك الخاص بك </label>
                <input
                  type="text"
                  className="form-control"
                  id="facebook"
                  placeholder="  الفيس بوك"
                  required
                />
              </div>
              <div className=" col-sm-6 col-md-3 col-lg-3 mb-3 ">
                <label for="from"> رقم شعبتك الحالية</label>
                <input
                  type="text"
                  className="form-control"
                  id="from"
                  placeholder=" ادخل رقم الشعبة   "
                  required
                />
              </div>

              <div className=" col-sm-6 col-md-3 col-lg-3 mb-3 ">
                <label for="to"> رقم الشعبة التي تريد الانتقال لها</label>
                <input
                  type="text"
                  className="form-control"
                  id="to"
                  placeholder=" ادخل رقم الشعبة    "
                  required
                />
              </div>

              <div className=" col-md-12 col-lg-12 mb-3 ">
                <label for="desc"> معلومات اضافية </label>
                <textarea
                  className="form-control"
                  id="desc"
                  rows="3"
                  placeholder=" معلومات اضافية تحب ان يراها الاخرون   "
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                ادخال
              </button>

              <div
                className={
                  isInsert
                    ? "done text-center mt-3"
                    : "done hidden text-center mt-3"
                }
              >
                لقد قمت بإدخال معلوماتك ليراها الاخرون، ان واجهت اي مشكلة يمكنك
                التواصل مع &nbsp;
                <a
                  href="https://www.flowcode.com/page/swat1563"
                  target="_blank"
                >
                  قتيبة عليان
                </a>
              </div>
            </form>
          </div>

          <hr className="mb-5" />
          <div className="search mt-5">
            <div className="search_title">
              <h3 className="text-center mb-3">
                البحث عن أشخاص يريدون تغير شعبتهم لمساق ما
              </h3>
            </div>
            <form className="row " onSubmit={handle_search}>
              <div class="input-group">
                <button type="submit" class="btn btn-secondary rounded-0 w-25">
                  ابحث
                </button>

                <input
                  type="text"
                  id="search_course"
                  class="form-control rounded-0"
                  placeholder="رمز المادة  "
                  aria-label="Search"
                  aria-describedby="search-addon"
                  required
                />
                <input
                  type="text"
                  id="search_course_section"
                  class="form-control rounded-0"
                  placeholder=" رقم الشعبة التي تريدها "
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </form>

            <div
              className={
                search_data
                  ? "search-results mt-2"
                  : "search-results mt-2 text-center"
              }
            >
              <div className="course_persons container p-0 mt-3 mb-3 ">
                <div className="row d-flex  justify-content-center">
                  {search_data ? search_data : search_empty}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switch_Courses;
