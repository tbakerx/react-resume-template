import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return <p></p>;

    var completename = this.props.data.completename;
    var profilePic = "images/" + this.props.data.image;
    var bio = this.props.data.bio;
    var street = this.props.data.address.street;
    var city = this.props.data.address.city;
    var state = this.props.data.address.state;
    var zip = this.props.data.address.zip;
    var phone = this.props.data.phone;
    var phonees = this.props.data.phonees;
    var email = this.props.data.email;
    var resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilePic}
              alt="ire-profile-img"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            {bio && bio.map((row) => <p className="bolder">{row}</p>)}

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{completename}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{phonees}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button" target="_blank">
                    <i className="fa fa-download"></i>Download Resume PDF
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
