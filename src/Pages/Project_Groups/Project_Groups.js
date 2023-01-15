import "./Project_Groups.css";
import { useState, useEffect } from "react";

import { ref, set, get, child } from "firebase/database";
import { Group_Person } from "../../Components/index";

const Project_Groups = (props) => {
  const [isInsert, setIsInsert] = useState(false);
  const [search_data, setSearch_data] = useState(null);
  const [search_empty, setSearch_empty] = useState("");

  const handle_insert = (event) => {
    event.preventDefault();

    const target = event.target;

    const course_id = target.course_id.value.toLowerCase();
    const name = target.name.value;
    const email = target.email.value;
    const facebook = target.facebook.value;
    const desc = target.desc.value;

    const currDate = new Date().toLocaleDateString();

    const putData = () => {
      set(ref(props.database, `project_groups/${course_id}/${name}`), {
        name: name,
        email: email,
        facebook: facebook,
        desc: desc,
        date: currDate,
      });
    };

    putData();
    target.course_id.value = "";
    target.name.value = "";
    target.email.value = "";
    target.facebook.value = "";
    target.desc.value = "";

    setIsInsert((current) => true);
  };

  const handle_search = async (event) => {
    event.preventDefault();

    const target = event.target;

    const course_id = target.search.value.toLowerCase();
    if (course_id === "") {
      return;
    }

    const dbRef = ref(props.database);

    let arr = null;
    await get(child(dbRef, `project_groups/${course_id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          arr = Object.values(snapshot.val()).map((item) => ({
            name: item.name,
            date: item.date,
            face: item.facebook,
            email: item.email,
            desc: item.desc,
          }));

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
        console.log({ person });
        return (
          <Group_Person
            index={index}
            key={index}
            name={person.name}
            face={person.face}
            desc={person.desc}
            date={person.date}
            email={person.email}
          />
        );
      })
    );

    console.log({ search_data });
  };

  return (
    <>
      <div className="project_groups p-5">
        <div className="container">
          <div className="title mb-5 text-center">
            <h1>جروبات المشاريع</h1>
          </div>
          <hr className="mb-5" />

          <div className="descripition  text-center text-md-end">
            هذا الميزة خاصة للطلاب الذين يصعب عليهم ايجاد جروبات للمشاريع الخاصة
            بهم، طريقة الاستعمال سهلة جداً ان اردت ان يعرف الاخرون انك تريد جروب
            لمشروع ما، ما عليك الا ادخال رمز المادة والتفاصيل الازمة للمشروع
            والمعلومات الازمة للتواصل معك، وفي حالة كان هنالك اشخاص للمادة التي
            تريدها ما عليك الا ان تدخل رمز المادة في البحث وسوف يعرض لك الأشخاص
            الذين يبحثون عن جروبات للمادة التي اخترتها ان وجد.
          </div>

          <div className="insert mt-5">
            <form className="row" onSubmit={handle_insert}>
              <div className="col-md-6 col-lg-6 mb-2">
                <label for="course_id">رمز مادة المشروع</label>
                <input
                  type="text"
                  className="form-control"
                  id="course_id"
                  placeholder="رمز المادة"
                  required
                />
              </div>
              <div className=" col-md-6 col-lg-6 mb-2 ">
                <label for="name"> ما هو اسمك </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=" ادخل اسمك"
                  required
                />
              </div>
              <div className=" col-md-6 col-lg-6 mb-2 ">
                <label for="facebook"> رابط حساب الفيس بوك </label>
                <input
                  type="text"
                  className="form-control"
                  id="facebook"
                  placeholder=" الفيس بوك "
                  required
                />
              </div>
              <div className=" col-md-6 col-lg-6 mb-2 ">
                <label for="email"> الايميل الخاص بك </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder=" البريد الالكتروني   "
                />
              </div>

              <div className=" col-md-12 col-lg-12 mb-2 ">
                <label for="desc"> الوصف </label>
                <textarea
                  className="form-control"
                  id="desc"
                  rows="3"
                  placeholder="ادخل معلومات اضافية عن الجروب الذي تريده"
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
                لقد قمت بإدخال معلوماتك، ان اردت حذفها يرجى التواصل مع &nbsp;
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
                البحث عن اشخاص يحتاجون الدخول الى جروبات
              </h3>
            </div>
            <form className="row " onSubmit={handle_search}>
              <div class="input-group">
                <button type="submit" class="btn btn-secondary rounded-0 w-25">
                  ابحث
                </button>
                <input
                  type="text"
                  id="search"
                  class="form-control rounded-0"
                  placeholder="رمز المادة التي تريد جروب لها"
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
              {search_data ? search_data : search_empty}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_Groups;
