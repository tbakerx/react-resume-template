import React from 'react';
import data from './resumeData.json';

const Footer = () => {
  const currDate = new Date().getFullYear();
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              data.main.social.map(({ name, url, className }) => (
                <li key={name}><a href={url}><i className={className}></i></a></li>
              ))
            }
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright {currDate} Vadim Zaripov</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
