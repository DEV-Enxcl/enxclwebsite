import AboutServices from "@/pages/about/AboutServices";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";
import ContactUs from "@/pages/contact/ContactUs";
import HomePage from "@/pages/home/HomePage";
import BusinessEnablement from "@/pages/services/BusinessEnablement";
import ITExS from "@/pages/services/ITExS";
import XclerateService from "@/pages/services/XclerateService";
import XpertiseServices from "@/pages/services/Xpertise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "@/pages/newsandinsights/blogs/Blogs";
import Mvp from "@/pages/newsandinsights/blogs/blog/Mvp";
import Events from "@/pages/newsandinsights/blogs/events/Events";
import StartupJourney from "@/pages/newsandinsights/blogs/blog/StartupJourney";
import StartupStrategy from "@/pages/newsandinsights/blogs/blog/StartupStrategy";
import StartupSuccess from "@/pages/newsandinsights/blogs/blog/StartupSuccess";
import AiXcel from "@/pages/aiexcel/AiXcel";
const Routers = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bizexs" element={<BusinessEnablement />} />
          <Route path="/itexs" element={<ITExS />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/xclerate" element={<XclerateService />} />
          <Route path="/about" element={<AboutServices />} />
          <Route path="/xperteaze" element={<XpertiseServices />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/mvp" element={<Mvp />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs/startupjourney" element={<StartupJourney />} />
          <Route path="/blogs/startupstrategy" element={<StartupStrategy />} />
          <Route path="/blogs/startupsuccess" element={<StartupSuccess />} />
          <Route path="/aixcel" element={<AiXcel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;
