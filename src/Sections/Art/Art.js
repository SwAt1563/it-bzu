import "./Art.css";

import { Link } from "react-router-dom";
import it_card from "../../assets/it_card.png";
import asal from "../../assets/asal.jpg";

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

              <div className="register-btn btn">
                <Link to="/card_registration">التسجيل</Link>
              </div>
            </div>

            <div className="logo col-sm-12 col-lg-4  ">
              <img className="img-fluid " src={it_card} alt="IT_Logo" />
            </div>
          </div>

          <hr className="mt-5" />

          <div className="row mt-5  d-flex align-items-center justify-content-center">
            <div className="content col-sm-12 col-lg-8">
              <h3 className="title mb-4">الحين بدأ المشوار لسوق العمل</h3>
              <div className="descripition mb-4 ">
                نظراً لكثرة الاسئلة عن سوق العمل، وما هي المهن المتوفرة في السوق
                الفلسطيني، ورسم خارطة للطلاب لكي يتعرف الى الهدف الذي يريد ان
                يصل له، قمنا بالاتفاق مع شركة عسل على توفير جولة في الشركة
                والتعرف عليها وعلى المهن المتاحة بها، بالإضافة الى التعرف على
                مجالات البرمجة الحالية بالأضافة الى امكانية السؤال بأي وقت ليتم
                الأجابة على أسالتك من مختصين في مجال سوق العمل
              </div>

              <div className="register-btn btn">
                <Link to="/asal_registration">التسجيل</Link>
              </div>
            </div>

            <div className="logo col-sm-12 col-lg-4  ">
              <img className="img-fluid rounded" src={asal} alt="IT_Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
