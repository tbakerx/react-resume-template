import { useRef } from "react";
import siteConfig from "../site-config";

const Header = (props) => {
  if (!props.data) return <p></p>;
  const { name, occupation } = props.data;
  const langRef = useRef();

  const networks = props.data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  const langSelectHandler = (event) => {
    props.onSetLang(langRef.current.value);
  };

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          {siteConfig.showContact && (
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          )}
          <li>
            <a>
              {props.languages.length > 1 && (
                <select
                  className="language-selector"
                  value={props.lang}
                  onChange={langSelectHandler}
                  ref={langRef}
                >
                  {props.languages.map((lang, idx) => (
                    <option className={lang} value={lang} key={lang}>
                      {props.flags[idx]}
                    </option>
                  ))}
                </select>
              )}
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{name}</h1>
          <h3>
            <span> {occupation}</span>
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#resume">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
