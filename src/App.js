import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import { Container } from "./Components/index";
import { Header, Footer } from "./Sections/index";

import { Home, Offers, About_us, Google_Form } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router basename="/it-bzu">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about_us" element={<About_us />} />
            <Route path="/card_registration" element={<Google_Form />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
