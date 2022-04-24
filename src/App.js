import React from 'react';
import data from './Components/resumeData.json'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';


const App = () => {
  return (
    <div className="App">
      <Header data={data.main}/>
      <About data={data.main}/>
      <Resume data={data.resume}/>
      <Footer data={data.main}/>
    </div>
  );
}

export default App;
