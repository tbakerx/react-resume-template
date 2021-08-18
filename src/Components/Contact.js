import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Alert, AlertTitle } from "@material-ui/lab";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentMessage: false,
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tit21f9",
        "template_to3qq5b",
        e.target,
        "user_Mjm9Zv6iu3lV7LWKsxHV4"
      )
      .then(
        (result) => {
          console.log("submitted");
          console.log(result.text);
          alert("FILL WITH PROPER ALERT FROM MATERIAL UI");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.sendEmail} id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                    style={{ width: "65%" }}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                    style={{ width: "65%" }}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                    style={{ width: "65%" }}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="10"
                    id="contactMessage"
                    name="contactMessage"
                    style={{ resize: "none", width: "65%", height: "auto" }}
                  ></textarea>
                </div>

                <div>
                  <button className="submit" onSubmit={this.sendEmail}>
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {city}, {state} <br />
                <span>{phone}</span> <br />
                <a href="mailto:humza718@gmail.com">humza718@gmail.com</a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
