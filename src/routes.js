import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Contact from "pages/contact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<h1>Page not found.</h1>} />
      <Route index path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MainRoutes;
