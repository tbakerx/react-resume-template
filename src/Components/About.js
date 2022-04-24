import React from 'react';
import data from './resumeData.json';

const About = () => {
   
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={data.main.image} alt="Vadim" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{data.main.bio}</p>
               <p> Currently I'm working as a Software Developer at <a href="https://senacor.com/">Senacor Technologies AG in Munich</a>.</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{data.main.name}</span><br />
                        <span>{data.main.phone}</span><br />
                        <span>{data.main.email}</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default About;
