import React, { Component } from "react";
import logoReact from '../skillsImgs/logoReact.svg'
import logoCSS from '../skillsImgs/logoCSS.svg'
import logoExpress from '../skillsImgs/logoExpress.svg'
import logoHTML from '../skillsImgs/logoHTML.svg'
import logoNode from '../skillsImgs/logoNode.svg'
import logoPostgreSQL from '../skillsImgs/logoPostgreSQL.svg'
import logoSQLite from '../skillsImgs/logoSQLite.svg'
import logoJS from '../skillsImgs/logoJS.svg'

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
          
          <ul>
            {education.description1 ?
              <li>
                {education.description1}
              </li>
              : ""
      }
          </ul>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <ul>
              <li> &bull; {work.description1} </li>
              <li> &bull; {work.description2} </li>
              <li> &bull; {work.description3} </li>
              <li> &bull; {work.description4} </li>
            </ul>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        // var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            {/* <span style={{ width: skills.level }} className={className}></span> */}
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">

            <div className="skillsImages">
              <img className="logoImages" src={logoReact} alt="React" />
              <img className="logoImages" src={logoJS} alt="JavaScript" />
              <img className="logoImages" src={logoHTML} alt="HTML" />
              <img className="logoImages" src={logoCSS} alt="CSS" />
              <img className="logoImages" src={logoNode} alt="Node" />
              <img className="logoImages" src={logoExpress} alt="Express" />
              <img className="logoImages" src={logoPostgreSQL} alt="PostgreSQL" />
              <img className="logoImages" src={logoSQLite} alt="SQLite" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
