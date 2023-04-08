import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import { Container } from "./Components/index";
import { Header, Footer } from "./Sections/index";

import {
  Home,
  Offers,
  About_us,
  Google_Form,
  Project_Groups,
  Switch_Courses,
  Services,
  Properties,
} from "./Pages/index";

import { app } from "./firebase";
import { getDatabase } from "firebase/database";

const db = getDatabase(app);

const App = () => {
  return (
    <>
      <Router basename="/it-bzu">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about_us" element={<About_us database={db} />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/project_groups"
              element={<Project_Groups database={db} />}
            />
            <Route
              path="/switch_courses"
              element={<Switch_Courses database={db} />}
            />

            <Route
              path="/properties"
              element={<Properties  database={db}/>}
            />

            <Route
              path="/card_registration"
              element={
                <Google_Form src="https://docs.google.com/forms/d/e/1FAIpQLSeHvH_QsP92_2I2C82gEkrOjzMHLnWIQCp6VzqkKGcMOoDSTw/viewform?embedded=true" />
              }
            />
            <Route
              path="/asal_registration"
              element={
                <Google_Form src="https://docs.google.com/forms/d/e/1FAIpQLScXV4WL8KicSeRK9d326iifiCPZUi2_N-Fx1uk-Zx6QSRttuw/viewform?embedded=true" />
              }
            />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
