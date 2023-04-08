import "./Item_Price.css";
import { useState } from "react";

const Item_Price = (props) => {
  const [free, setFree] = useState(true);

  const handlePriceChange = (e) => {
    const value = true ? e.target.value === "yes" : false;
    
    setFree(value);
  };

  return (
    <>


      <div className="item p-5 ">
      <h2 className="text-center mt-3">الغرض "{props.index}"</h2>
        <div className="form-group ">
          <label for={`course_id_${props.index}`}>رمز المساق</label>
          <input
            type="text"
            className="form-control w-50 mb-3"
            id={`course_id_${props.index}`}
            placeholder="ادخل رمز المادة"
            required
          />

          <label  className="">هل هو مجاناً</label>

          <input
            className="form-check-input me-3"
            type="radio"
            name={`free_${props.index}`}
            id={`yes_${props.index}`}
            value="yes"
            checked={free === true}
            onChange={handlePriceChange}
          />
          <label className="form-check-label ms-3 " for={`yes_${props.index}`}>
            نعم
          </label>

          <input
            className="form-check-input "
            type="radio"
            name={`free_${props.index}`}
            id={`no_${props.index}`}
            value="no"
            checked={free === false}
            onChange={handlePriceChange}
          />
          <label className="form-check-label" for={`no_${props.index}`}>
            لا
          </label>

          {!free && (
            <div className="">
              <label for={`price_${props.index}`}>ما سعره</label>
              <input
                type="text"
                className="form-control  w-50"
                id={`price_${props.index}`}
                placeholder="اكتب السعر بالشيكل"
                required
              />
            </div>
          )}
        </div>
      

      <div className="form-group mt-3">
        <label for={`desc_${props.index}`}>تفاصيل الغرض</label>
        <textarea className="form-control" id={`desc_${props.index}`} rows="3" required></textarea>
      </div>

      </div>
    </>
  );
};

export default Item_Price;
