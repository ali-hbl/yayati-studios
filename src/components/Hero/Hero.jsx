import './Hero.scss';

const Hero = () => {
  const listItems = ['Songwriting & Composition', 'Recording & Producing', 'Lessons & Workshops', 'About Us'];

  return (
    <main className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">Yayati Studios</h1>
          <p className="hero-description">We bring your artistic vision to life with top-notch production services.</p>
        </div>
        <div className="hero-right">
          <ul className="hero-list">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Hero;
