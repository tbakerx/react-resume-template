import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import siteConfig from "./site-config";

const App = (props) => {
  const [resumeData, setResumeData] = useState({});
  const [lang, setLang] = useState(siteConfig.defaultLanguage); //TODO get default browser language

  const getResumeData = async () => {
    try {
      const response = await fetch(`/resumeData_${lang}.json`);
      const data = await response.json();
      setResumeData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getResumeData();
  }, [lang]);

  return (
    <div className="App">
      <Header
        data={resumeData.main}
        languages={siteConfig.languages}
        flags={siteConfig.flags}
        lang={lang}
        onSetLang={setLang}
      />
      <Resume data={resumeData.resume} />
      <About data={resumeData.main} />
      <Testimonials data={resumeData.testimonials} />
      {siteConfig.showContact && <Contact data={resumeData.main} />}
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
