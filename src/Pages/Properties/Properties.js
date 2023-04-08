import "./Properties.css";
import { Service, Property } from "../../Components";

import { useState, useEffect } from "react";
import { ref, set, get, child } from "firebase/database";
import { Item_Price } from "../../Components";
import { FaPlusCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Fade from "react-reveal/Fade";

const Properties = (props) => {
  const [components, setComponents] = useState([]);
  const [nummber_of_items, setNumberOfItems] = useState(0);
  const [search_data, setSearch_data] = useState(null);
  const [search_empty, setSearch_empty] = useState("");

  const handlePlusItem = () => {
    setComponents([...components, <Item_Price index={nummber_of_items + 1} />]);
    setNumberOfItems(nummber_of_items + 1);
  };

  const handle_insert = (event) => {
    event.preventDefault();

    if(nummber_of_items === 0)
      return;
    const target = event.target;

    const name = target.name.value;
    const facebook = target.facebook.value;
    const currDate = new Date().toLocaleDateString();

    for (let index = 1; index <= nummber_of_items; index++) {
      const newUuid = uuidv4();

      const course_id = target.hasOwnProperty(`course_id_${index}`)
        ? target[`course_id_${index}`].value.toLowerCase()
        : "";

      const desc = target.hasOwnProperty(`desc_${index}`)
        ? target[`desc_${index}`].value.toLowerCase()
        : "";
      const free = target.hasOwnProperty(`free_${index}`)
        ? target[`free_${index}`].value.toLowerCase()
        : "";
      let price = 0;

      if (free === "no") {
        price = target.hasOwnProperty(`price_${index}`)
          ? target[`price_${index}`].value.toLowerCase()
          : 0;
      }

      const putData = () => {
        set(ref(props.database, `properties/${course_id}/${newUuid}`), {
          name: name,
          facebook: facebook,
          date: currDate,
          desc: desc,
          price: price,
        });
      };

      putData();
    }

    setComponents([]);
    setNumberOfItems(0);
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
    await get(child(dbRef, `properties/${course_id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          arr = Object.values(snapshot.val()).map((item) => ({
            name: item.name,
            date: item.date,
            facebook: item.facebook,
            desc: item.desc,
            price: item.price,
          }));

          arr.sort(function (a, b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
          });
        } else {
          console.log("No data available");
          setSearch_empty(() => "لا يوجد أغراض متوفرة لهذا المساق");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    setSearch_data(
      arr?.map((property, index) => {
        console.log({ property });
        return (
          <Property
            index={index}
            key={index}
            name={property.name}
            facebook={property.facebook}
            desc={property.desc}
            date={property.date}
            price={property.price}
          />
        );
      })
    );
  };

  return (
    <>
      <div className="properties p-5">
        <div className="container">
          <div className="title mb-5 text-center ">
            <h1> ممتلكات الطلاب </h1>
          </div>
          <hr className="mb-5" />

          <div className="descripition  text-center text-md-end mb-5">
            هذه الميزة خاصة للطلاب الذين يريدون عرض أغراضهم للطلاب الآخرين، فأن
            كان لديك غرض لمساق ما وتريد عرضه على الطلاب مجاناً أو بمبلغ مالي ما
            عليك الا أن تدخل معلوماتك للتواصل معك وما هي الأغراض التي تريد بيعها
            أو تسليمها للطلاب، فمثلاً أن كان لديك فورمات لمساق ما وتريد بيعه
            للطلاب فما عليك الا ان تكتب معلوماتك بالإضافة الى رمز المساق وتفاصيل
            هذا الفورمات، وهذا ينطبق على الأغراض الأخرى مثل عدة المشغل، أو شنطة
            مرسم، أو كتب دراسية ويعود لك بيع هذه الأغراض أو عرضها مجاناً للطلاب.
          </div>

          <form className="row" onSubmit={handle_insert}>
            <div className="form-group col-lg-6 col-md-12">
              <label for="name">ما هو أسمك</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="أدخل أسمك"
                required
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label for="facebook">حساب الفيس بوك </label>
              <input
                type="text"
                className="form-control"
                id="facebook"
                placeholder="ادخل رابط الفيس بوك الخاص بك"
                required
              />
            </div>

            <div className="items mt-3">
              {components.map((component, index) => (
                <div key={index}>{component}</div>
              ))}
            </div>
            <FaPlusCircle onClick={handlePlusItem} className="mt-3 fs-3" />

            <button type="submit" className="btn btn-primary w-100 mt-5">
              أعرضه للطلاب
            </button>
          </form>

          <hr className="mb-5" />
          <div className="search mt-5">
            <div className="search_title">
              <h3 className="text-center mb-3">
                البحث عن الأغراض المتوفرة لمساق ما
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
                  placeholder="رمز المساق الذي تريده"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  required
                />
              </div>
            </form>

            <div
              className={
                search_data
                  ? "search-results mt-5"
                  : "search-results mt-2 text-center"
              }
            >
              <Fade bottom>
                <div className="property-ies  align-items-center justify-content-center">
                  <div className="row">
                    {search_data ? search_data : search_empty}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
