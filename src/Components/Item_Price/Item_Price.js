import "./Item_Price.css";
import { useState } from "react";
import {FaTimes, FaRegTimesCircle} from "react-icons/fa"

const Item_Price = (props) => {
  const [itemStatus, setItemStatus] = useState("");

  const handlePriceChange = (e) => {
    const value =  e.target.value;
    
    setItemStatus(value);
  };

  const handleClose = (e) => {
    
    const element = document.getElementById(`item_${props.index}`);
    element.remove();

  };

  return (
    <>


      <div className="item p-5" id={`item_${props.index}`}>
        <FaTimes className="close" onClick={handleClose}/>
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
            name={`itemStatus_${props.index}`}
            id={`yes_${props.index}`}
            value="yes"
          
            onChange={handlePriceChange}
          />
          <label className="form-check-label ms-3 " for={`yes_${props.index}`}>
            نعم
          </label>

          <input
            className="form-check-input "
            type="radio"
            name={`itemStatus_${props.index}`}
            id={`no_${props.index}`}
            value="no"
            
            onChange={handlePriceChange}
          />
          <label className="form-check-label ms-3" for={`no_${props.index}`}>
            لا
          </label>

          <input
            className="form-check-input "
            type="radio"
            name={`itemStatus_${props.index}`}
            id={`change_${props.index}`}
            value="change"
            
            onChange={handlePriceChange}
          />
          <label className="form-check-label" for={`change_${props.index}`}>
           للتبديل
          </label>


          {itemStatus === "no" && (
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
