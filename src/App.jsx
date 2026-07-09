import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SancturiesPage from "./pages/SancturiesPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SanctuaryDetail from "./sanctuarydetails/SancturaryDetail";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import Stories from "./pages/Stories";
import News from "./pages/News";
import Quiz from "./pages/Quiz";
import Games from "./pages/Games";
import Tracker from "./pages/Tracker";

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
<Route path="/stories" element={<Stories />} />
<Route path="/quiz" element={<Quiz />} />
<Route path="/games" element={<Games />} />
<Route path="/tracker" element={<Tracker />} />
<Route path="/events" element={<News />} />
<Route path="/volunteer" element={<Volunteer/>} />
<Route path="/contact" element={<div>Contact Page</div>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;