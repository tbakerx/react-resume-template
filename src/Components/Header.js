import React from 'react';
import data from './resumeData.json';

const Header = () => {
   return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hello, I am {data.main.name}.</h1>
            <h3>I'm a {data.main.city} based <span>{data.main.occupation}</span>. {data.main.description}.</h3>
            <hr />
            <ul className="social">
               {
                  data.main.social.map(({name, url, className}) => (
                     <li key={name}><a href={url}><i className={className}></i></a></li>
                  ))
               }
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
   );
}

export default Header;
