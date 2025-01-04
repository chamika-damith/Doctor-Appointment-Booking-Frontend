import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import MyProfile from "./pages/MyProfile";
import MyAppoinments from "./pages/MyAppointments";
import Appoinments from "./pages/Appoinments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-10 sm:-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appoinments" element={<MyAppoinments />} />
        <Route path="/appoinments/:docId" element={<Appoinments />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
