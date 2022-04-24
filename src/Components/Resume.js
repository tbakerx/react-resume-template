import React from 'react';
import data from './resumeData.json';

const Resume = () => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {
                data.resume.education.map(({school, degree, graduated, description}) => (
                  <div key={school}>
                    <h3>{school}</h3>
                    <p className="info">{degree} <span>&bull;</span><em className="date">{graduated}</em></p>
                    <p>{description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {
            data.resume.work.map(({company, title, years, description}) => (
              <div key={company}>
                <h3>{company}</h3>
                <p className="info">{title}<span>&bull;</span> <em className="date">{years}</em></p>
                <p>{description}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          <p>{data.resume.skillmessage}</p>
          <div className="bars">
            <ul className="skills">
              {
                data.resume.skills.map(({name, level}) => 
                  (
                  <li key={name}>
                    <em>{name}</em>
                    <span className={`bar-expand ${name.toLowerCase()}`} style={{ width: level }}></span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
