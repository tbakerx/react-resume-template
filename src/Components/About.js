import React from "react";

export default function About({ data }) {
  var name = data.name;
  var profilepic = "https://github.com/ashutoshkailkhura.png";
  var bio = data.bio;
  var city = data.address.city;
  var state = data.address.state;
  var email = data.email;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="ashutosh" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}
                </span>
                <br />
                <span>
                  <a href="mailto:user@domain.com?Subject=Hello%20User">
                    {email}
                  </a>
                </span>
              </p>
            </div>
            <div className="columns download">
              {/* <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
