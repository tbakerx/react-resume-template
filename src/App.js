import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      webData: {}
    };

    //ReactGA.initialize('EU-110570651-1');
    //ReactGA.pageview(window.location.pathname);

  }

  getwebData(){
    $.ajax({
      url:'/webData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({webData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getwebData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.webData.main}/>
        <Resume data={this.state.webData.resume}/>

        <About data={this.state.webData.main}/>
        <Testimonials data={this.state.webData.testimonials}/>
        <Contact data={this.state.webData.main}/>
        <Footer data={this.state.webData.main}/>
      </div>
    );
  }
}

export default App;
