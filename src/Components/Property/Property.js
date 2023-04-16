import "./Property.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Property = (props) => {
  const [price, setPrice] = useState("");

  const checkPrice = (e) => {
    if (props.price === "0") {
      setPrice("مجاناً");
    }else if(props.price === "-1"){
      setPrice("للتبديل");
    }else{
      setPrice(`${props.price}₪`)
    }
  };

  useEffect(() => {
    checkPrice();
  }, [props.price]);

  return (
    <>
      <div class="container col-lg-4 col-md-6 col-sm-12 ">
        <section class="sec mx-auto mt-4 ">
          <div class="card-main">
            <div class="card-body">
              <blockquote class="blockquote blockquote-custom bg-white px-3 pt-4">
                <div class="blockquote-custom-icon  shadow-1-strong">{price}</div>
                <p class="mb-0 mt-2 font-italic">
                  {props.desc}
                  <a href={props.facebook} class="facebook " target="_blank">
                    @{props.name}
                  </a>
                </p>
                <footer class="blockquote-footer pt-2 mt-3 pb-2 border-top">
                  تاريخ النشر:
                  <span title="date"> {props.date} </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Property;
