import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import { Container } from "./Components/index";
import { Header, Footer } from "./Sections/index";

import { Home, Students } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
