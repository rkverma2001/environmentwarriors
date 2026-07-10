import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
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
import Activities from "./pages/Activities";

const App = () => {
  return (
    <LanguageProvider>
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
  <Route path="/activities" element={<Activities />} />
  <Route path="/volunteer" element={<Volunteer/>} />
  <Route path="/contact" element={<div>Contact Page</div>} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;