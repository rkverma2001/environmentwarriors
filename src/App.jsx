import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SancturiesPage from "./pages/SancturiesPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SanctuaryDetail from "./sanctuarydetails/SancturaryDetail";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/sanctuaries"
          element={<SancturiesPage />}
        />
        <Route
  path="/sanctuaries/:slug"
  element={<SanctuaryDetail />}
/>
<Route path="/about" element={<About />} />
<Route path="/events" element={<div>News & Events Page</div>} />
<Route path="/volunteer" element={<Volunteer/>} />
<Route path="/contact" element={<div>Contact Page</div>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;