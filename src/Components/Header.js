import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var description= this.props.data.description;
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
	         <li><a className="smoothscroll" href="#topic">Topic</a></li>
            <li><a className="smoothscroll" href="#about">Company</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h2>Joyce's</h2>
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#topic"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
