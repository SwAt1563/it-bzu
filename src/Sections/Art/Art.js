import "./Art.css";

import { Link } from "react-router-dom";
import it_card from "../../assets/it_card.png";

const Art = () => {
  return (
    <>
      <div className="art text-center text-lg-end">
        <div className="container">
          <div className="row mt-5 ">
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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHvH_QsP92_2I2C82gEkrOjzMHLnWIQCp6VzqkKGcMOoDSTw/viewform?usp=sf_link">
                  التسجيل
                </a>
              </div>
            </div>

            <div className="logo col-sm-12 col-lg-4 ">
              <img className="img-fluid" src={it_card} alt="IT_Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
