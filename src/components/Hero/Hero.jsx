import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-tag">
            GANPATI SPECIAL · 11 DAYS DELIVERY
          </p>

          <h1>
            Fresh Flower Haar,
            <span> Made With Love.</span>
          </h1>

          <p className="hero-description">
            Ganpati Bappa ke liye fresh aur beautiful flower haar,
            ab aapke ghar tak.
          </p>

          <div className="hero-actions">
            <a href="#haar" className="hero-primary-btn">
              Explore Haar
            </a>

            <a href="#how-it-works" className="hero-secondary-btn">
              How It Works
            </a>
          </div>

          <div className="hero-info">

            <div className="hero-info-item">
              <strong>11</strong>
              <span>Days Delivery</span>
            </div>

            <div className="hero-divider"></div>

            <div className="hero-info-item">
              <strong>Fresh</strong>
              <span>Every Day</span>
            </div>

            <div className="hero-divider"></div>

            <div className="hero-info-item">
              <strong>Easy</strong>
              <span>WhatsApp Order</span>
            </div>

          </div>

        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src="/images/hero-flower.png"
              alt="Fresh flower haar"
            />

            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;