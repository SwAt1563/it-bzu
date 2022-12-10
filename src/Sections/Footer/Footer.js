import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p>
                حقوق الطبع والنشر محفوظة
                <Link to="/"> لطلاب تكنولوجيا المعلومات </Link>
                لسنة 2023
                <br />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
