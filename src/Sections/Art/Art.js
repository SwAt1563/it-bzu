import "./Art.css";

import { Link } from "react-router-dom";
import it_card from "../../assets/it_card.png";
import asal from "../../assets/asal.jpg";
import ramdan from "../../assets/ramdan.png";

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

              <div className="register-btn btn mb-3">
                <Link to="/card_registration">التسجيل</Link>
              </div>
            </div>

            <div className="logo col-sm-12 col-lg-4  ">
              <img className="img-fluid " src={it_card} alt="IT_Logo" />
            </div>
          </div>
          {/* <hr className="mt-5" />

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

              <div className="register-btn btn mb-4">
                <Link to="/asal_registration">التسجيل</Link>
              </div>
            </div>

            <div className="logo col-sm-12 col-lg-4  ">
              <img className="img-fluid rounded" src={asal} alt="ASAL Logo" />
            </div>
          </div> */}
          <hr className="mt-5" />
          <div className="row mt-5  d-flex align-items-center justify-content-center">
            <div className="content col-sm-12 col-lg-8">
              <h3 className="title mb-4">
                فطور وأمسية رمضانية لطلاب الاي تي بالتعاون مع أنا جوال وايزي
                لايف
              </h3>
              <div className="descripition mb-4 ">
                قام قتيبة عليان بالتعاون مع أنا جوال بتحضير فطور وأمسية رمضانية
                بمطعم بريك كورنر برعاية أيزي لايف، وسوف يتخلل هذه الامسية الكثير
                من الأنشطة والفعاليات والجوائز الكثيرة، ولا سيما مفاجئات خاصة
                لطلاب الأنرات، وعروضات وخصومات خلال هذه الأمسية موضحة في فورم
                التسجيل.
              </div>

              <div className="register-btn btn mb-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHHEitx0iM_UIQWsNnqxVyXkCBgRCfdhSxh0IOawg9zhnD1Q/viewform?usp=sf_link">
                  التسجيل
                </a>
              </div>
            </div>

            <div className="logo col-sm-12 col-lg-4  ">
              <img
                className="img-fluid rounded"
                src={ramdan}
                alt="ramdan Logo"
              />
            </div>
          </div>

          <hr className="mt-5" />
          <div className="row mt-5  d-flex align-items-center justify-content-center">
            <div className="content col-sm-12 col-lg-12">
              <h3 className="title mb-4">
                يمكنك الآن البحث عن الأغراض المتوفرة لمساق ما
              </h3>
              <div className="descripition mb-4 ">
                هذه الميزة خاصة للطلاب الذين يريدون عرض أغراضهم للطلاب الآخرين،
                فأن كان لديك غرض لمساق ما وتريد عرضه على الطلاب مجاناً أو بمبلغ
                مالي ما عليك الا أن تدخل معلوماتك للتواصل معك وما هي الأغراض
                التي تريد بيعها أو تسليمها للطلاب، فمثلاً أن كان لديك فورمات
                لمساق ما وتريد بيعه للطلاب فما عليك الا ان تكتب معلوماتك
                بالإضافة الى رمز المساق وتفاصيل هذا الفورمات، وهذا ينطبق على
                الأغراض الأخرى مثل عدة المشغل، أو شنطة مرسم، أو كتب دراسية ويعود
                لك بيع هذه الأغراض أو عرضها مجاناً للطلاب.
              </div>

              <div className="register-btn btn mb-4">
                <Link to="/properties"> جد غرضك </Link>
              </div>
            </div>
          </div>

          <hr className="mt-5" />
          <div className="row mt-5  d-flex align-items-center justify-content-center">
            <div className="content col-sm-12 col-lg-12">
              <h3 className="title mb-4">
                من الان قد أصبح من السهل إيجاد جروب لمشروعك
              </h3>
              <div className="descripition mb-4 ">
                هذا الميزة خاصة للطلاب الذين يصعب عليهم ايجاد جروبات للمشاريع
                الخاصة بهم، طريقة الاستعمال سهلة جداً ان اردت ان يعرف الاخرون
                انك تريد جروب لمشروع ما، ما عليك الا ادخال رمز المادة والتفاصيل
                الازمة للمشروع والمعلومات الازمة للتواصل معك، وفي حالة كان هنالك
                اشخاص للمادة التي تريدها ما عليك الا ان تدخل رمز المادة في البحث
                وسوف يعرض لك الأشخاص الذين يبحثون عن جروبات للمادة التي اخترتها
                ان وجد.
              </div>

              <div className="register-btn btn mb-4">
                <Link to="/project_groups">اريد البحث عن جروب</Link>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-5  d-flex align-items-center justify-content-center">
            <div className="content col-sm-12 col-lg-12">
              <h3 className="title mb-4">
                ان اردت ان تدخل الى شعبة ممتلئة ما عليك الا البحث عنها او
                التسجيل بها
              </h3>
              <div className="descripition mb-4 ">
                هذه الميزة خاصة للطلاب الذين يريدون تبديل شعبتهم الحالية لمساق
                ما مع شعبة اخرى لنفس المساق، ولكن هذه الشعبة ممتلئة لذلك تقوم
                بالبحث عن الشعبة التي تريد الانتقال اليها وان كان هناك اشخاص
                اخرون يريدون ان يخرجوا من هذه الشعبة تستطيع ان تتواصل معهم، لكي
                تقوموا بتبديل شعبكم مع بعضكم البعض، وان لم تجد اشخاص تستطيع ان
                تدخل المعلومات الخاصة بك وما هي الشعبة الحالية التي توجد بها وما
                هي الشعبة التي تريد الانتقال اليها، ليتسنى للاخرين عند البحث
                ايجادك على القائمة والتواصل معك .
              </div>

              <div className="register-btn btn mb-4">
                <Link to="/switch_courses">اريد البحث عن شعبة</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
