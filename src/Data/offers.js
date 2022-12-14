import easy_life_logo from "../assets/offers_icons/easy_life.jpg";

import break_logo from "../assets/offers_icons/break_corner/break.jpg";
import break_1 from "../assets/offers_icons/break_corner/1.jpg";
import break_2 from "../assets/offers_icons/break_corner/2.jpg";
import break_3 from "../assets/offers_icons/break_corner/3.jpg";
import break_4 from "../assets/offers_icons/break_corner/4.jpg";

import hdyte_logo from "../assets/offers_icons/hdyte/gift.jpg";
import hdyte_1 from "../assets/offers_icons/hdyte/1.jpeg";
import hdyte_2 from "../assets/offers_icons/hdyte/2.jpeg";
import hdyte_3 from "../assets/offers_icons/hdyte/3.jpeg";
import hdyte_4 from "../assets/offers_icons/hdyte/4.jpeg";

const offers = [
  {
    key: 1,
    name: "ايزي لايف",
    date_from: "15/12/2022",
    date_to: "1/5/2023",
    descripition: "يتم الحصول على هذه العروضات عند شراء اي لابتوب من المحل",
    offers: [
      "خصم يعتمد على نوع الابتوب يصل الى 300 شيكل",
      "سماعة جيمنج محيطية 7.1 او سماعة سلكية او لاسكلية حسب نوع الابتوب",
      "فلاشة 16 جيجا",
      "سبيكر بلوتوث او ايربودز",
      "تحميل جميع برامجي ادوبي  بالاضافة لبرامج المعماري حسب الطلب",
      "وندوز اصلي",
      "منظف لابتوب",
      "حماية كيبورد",
      "حقيبة لابتوب",
      "ماوس",
      "امكانية الطلب اونلاين مع ابراز صورة البطاقة عند الطلب لاخذ الخصومات",
      "الحصول على عروضات اضافية مميزة عند شراء اكسسوارات من المحل",
    ],
    logo: easy_life_logo,
    face: "https://www.facebook.com/EasyLifeSale",
    number: "0593069090",
    position:
      "رام الله - وسط البلد - مجمع النبالي والفارس 2 - الطابق السادس - جانب موقف سيارات ام الشرايط - مقابل بنك فلسطين، نابلس - الدوار - شارع سفيان - مجمع سفيان التجاري - الطابق التاسع",
    time: "10AM-6PM",
  },
  {
    key: 2,
    name: "بريك كورنر",
    date_from: "1/1/2023",
    date_to: "5/2/2023",
    descripition: "يتم الحصول على هذه العروض عند زيارة المكان",
    offers: [
      "حجز غرف ال VIPs عن طريق الاتصال بالمحل مسبقا, التي توفر شاشة Projector، LCD، كوابل نت فايبر، ونت واي فاي، شواحن لجميع الجولات، تدفئة وتهوية مركزية، اضاءة خاصة و غرفة منعزلة عن الصوت ... ويتم ذلك من خلال الحجز من قبل 3 اشخاص او اكثر ويتم الحصول على خصم 15% على الأطعمة ويشمل الخصم المشروبات والاراجيل عندما يكونوا 5 اشخاص او اكثر",
      "خصم على الأطعمة والمشروبات والاراجيل داخل المحل ولكن خارج غرف ال VIP يصل الى 15%",
    ],
    logo: break_logo,
    face: "https://www.facebook.com/BreakCornerPalestine?mibextid=LQQJ4d",
    inst: "https://instagram.com/breakcornerpalestine?igshid=YmMyMTA2M2Y=",
    number: "0594313213 & 0566313213",
    position: "بيرزيت - بوابة الاي تي - بجانب كفي ريو  ",
    time: "10AM-12PM",
    imgs: [break_1, break_2, break_3, break_4],
  },
  {
    key: 3,
    name: "هديتي للادوات المنزلية",
    date_from: "8/1/2023",
    date_to: "1/2/2023",
    descripition:
      "يوفر المحل الكثير من الادوات والاثاث المنزلي وهدايا تستطيعوا ان تقدموها لزملائكم او حتى الى والداتكم، ويتمتع المحل بخدمة التوصيل فحتى لو لم تكن طالب سكنات في بيرزيت سوف يتم ايصال طلبك حتى منزلك، ولا تنسوا متابعة صفحة المحل لتعرفوا كل غرض جديد  ",
    offers: [
      "خصم يصل الى 10% على جميع الادوات المنزلية والهدايا",
      "توفر خدمة التوصيل",
    ],
    logo: hdyte_logo,
    face: "https://www.facebook.com/gift.shop.hdyte.suhail",
    inst: "https://instagram.com/hadeyatesuhail?igshid=YmMyMTA2M2Y=",
    number: "022819415 & 0599818255",
    position:
      "بيرزيت - الشارع الرئيسي - مقابل محطة بيرزيت للمحروقات - بجانب برج المدخن",
    time: "10AM-9PM",
    imgs: [hdyte_1, hdyte_2, hdyte_3, hdyte_4],
  },
];

export default offers;
