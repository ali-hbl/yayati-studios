import './Intro.scss';

const Intro = () => {
  return (
    <section className="intro-section">
      <h1>Welcome to Yayati Studios</h1>
      <div className="intro-content">
        <p>
          At <span className="highlight">Yayati Studios</span>, we bring your musical visions to life. Our team of
          experienced producers and songwriters work closely with artists to create unique and captivating compositions.
        </p>
        <p>
          Whether you're looking to record, produce, or learn, we offer tailored services to meet your artistic needs.
          Join us and let's make music that resonates.
        </p>
        <div className="intro-points">
          <div>
            <i className="fas fa-music"></i>
            <span>Expert Songwriting & Composition</span>
          </div>
          <div>
            <i className="fas fa-record-vinyl"></i>
            <span>High-Quality Recording & Production</span>
          </div>
          <div>
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Personalized Lessons & Workshops</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
