import React from "react";
import PersonalInfo from "../pages/personalInfo";
import Footer from "./footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="overflow-hidden w-full">
        <div className="mx-16 py-10 relative h-full">
          <Router>
            <Routes>
              <Route element={<PersonalInfo />} path="/" />
            </Routes>
          </Router>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
