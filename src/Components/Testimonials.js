const Testimonials = (props) => {
  if (!props.data) return <p></p>;

  var testimonials = props.data.testimonials.map(function (testimonials) {
    return (
      <li key={testimonials.user}>
        <blockquote>
          <p className="recognition-p">{testimonials.text}</p>
          <img
            className="recognition-pic"
            src={testimonials.img}
            alt="recognition-img"
          />
          <cite>{testimonials.user}</cite>
        </blockquote>
      </li>
    );
  });

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
