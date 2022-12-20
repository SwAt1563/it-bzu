import "./Art.css";

import { Link } from "react-router-dom";
import it_card from "../../assets/it_card.png";
import break_icon from "../../assets/offers_icons/break.jpg";

const Art = () => {
  return (
    <>
      <div className="art text-center text-lg-end">
        <div className="container">
          <div className="row mt-5  d-flex align-items-center justify-content-center">
            <div className="content col-sm-12 col-lg-8">
              <h3 className="title mb-4">سارعوا في اخذ البطاقات</h3>
              <div className="descripition mb-4 ">
                هذه البطاقات ستوفر لك الكثير من الخصومات المتنوعة من مؤسسات
                ومحلات تعليمية وتجارية بالاضافة الى المطاعم والكفي شب والمراكز
                الترفيهية, تحمل البطاقة رقمك الجامعي واسمك , بالاضافة الى QR
                Code, الذي من خلاله تدخل على موقع خاص لطلاب تكنولوجيا المعلومات,
                والذي سيعرض لك ما هي الخصومات المتوفرة في الوقت الحالي وجميع
                الادلة الخاصة بهذه الخصومات, وسوف يتم الرفع على هذا الموقع
                الخصومات بشكل مستمر لذلك عليك متابعته لمعرفة ما هي الخصومات
                المتوفرة لك في هذه الأوقات, وهذه البطاقة يجب ان تحافظ عليها طوال
                حياتك الجامعية من اجل الحصول على هذه الخصومات وسوف يتم توفير هذه
                البطاقات مجانا في البداية اما في حالة ضياعها سوف يتم دفع مبلغ
                رمزي لتوفير بطاقة جديدة لك.
              </div>
              <div className="offers-btn btn ms-4">
                <Link to="/offers">العروضات</Link>
              </div>
              <div className="register-btn btn">
                <Link to="/card_registration">التسجيل</Link>
              </div>
            </div>

            <div className="logo col-sm-12 col-lg-4  ">
              <img className="img-fluid " src={it_card} alt="IT_Logo" />
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-5  d-flex  justify-content-center">
            <div className="content col-sm-12 col-lg-8">
              <h3 className="title mb-4">
                عرض ولا احلى انتظروا بداية السنة الجديدة
              </h3>
              <div className="descripition mb-4 ">
                بمناسبة فترة الامتحانات النصفية وفرنا لكم خصومات على غرف VIPs
                للدراسة في مدينة بيرزيت بالاضافة الى خصومات على جميع انواع
                الاغذية والمشروبات والاراجيل، ولا ننسى المعاناة التي يواجهها
                طلاب السكنات في طلب الوجبات في الفترة المسائية بحيث لا تتوفر
                محلات من اجل توصيل وجبات منزلية صحية، لذلك قمنا بالترتيب مع احدى
                المطاعم على توفير هذه الوجبات مع توصيل مجاني بالاضافة الى خصومات
                على اسعارها ... ما عليكم الا انتظار بداية السنة الجديدة.
              </div>
            </div>
            <div className="logo col-sm-12 col-lg-4  ">
              <img className="img-fluid " src={break_icon} alt="IT_Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
