const Resume = (props) => {
  if (!props.data) return <p></p>;

  const education = props.data.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="bolder">
          {education.degree} <span>&bull; </span>
          <em className="date">{education.graduated}</em>
        </p>
        <p className="work-description">{education.description}</p>
      </div>
    );
  });

  const language = props.data.language.map(function (language) {
    return (
      <div key={language.lang}>
        <p>
          <span>
            <span className="bolder">{language.lang}</span> &bull;{" "}
          </span>{" "}
          {language.level}
        </p>
      </div>
    );
  });

  const work = props.data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3 className="h3-resume">{work.company}</h3>
        <p className="info work-description">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        {work.description.map((row, idx) => (
          <p key={idx} className="work-description-row">
            {row}
          </p>
        ))}
      </div>
    );
  });

  const skillmessage = props.data.skillmessage;
  const skills = props.data.skills.map(function (skills) {
    var className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

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

      <div className="row language">
        <div className="three columns header-col">
          <h1>
            <span>Language</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{language}</div>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p className="skill-message">{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
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
      </div>
    </section>
  );
};

export default Resume;
