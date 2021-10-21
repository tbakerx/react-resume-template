import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import data from "./resumeData.json";
import SignUp from "./Components/SignUp";

export default function App() {
  return (
    <div className="App">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      {/* <Contact data={data.main} /> */}
      <SignUp />
      <Footer data={data.main} />
    </div>
  );
}
