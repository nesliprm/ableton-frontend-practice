import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h1>Ableton</h1>
        <div className="footer-grid">
          <div className="footer-grid-section">
            <a href="">Register Live or Push ›</a>
            <br />
            <a href="">About Ableton ›</a>
            <br />
            <a href="">Jobs ›</a>
            <div className="social-links">
              <a href="">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-youtube"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-grid-section">
            Education
            <br />
            <a href="">Offers for students and teachers ›</a>
            <br />
            <a href="">Offers for institutions ›</a>
            <br />
            <a href="">Push 1 trade-in initiative ›</a>
          </div>
          <div className="footer-grid-section">
            Sign up to our newsletter
            <br />
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads and more.
            <br />
            <div className="input-field">
              <input type="text" placeholder="Email address" />
              <button>Sign up</button>
            </div>
          </div>
          <div className="footer-grid-section">
            Community
            <br />
            <a href="">Find Ableton User Groups ›</a>
            <br />
            <a href="">Find Certified Training ›</a>
            <br />
            <a href="">Become a Certified Trainer ›</a>
          </div>

          <div className="footer-grid-section">
            Distributor
            <br />
            <a href="">Find Distributors ›</a>
            <br />
            <a href="">Try Push in-store ›</a>
          </div>

          <div className="footer-grid-section">
            Language and Location
            <br />
            <div className="lang-field">
              <select name="languages" id="lang-select">
                <option value="">Choose a language</option>
                <option value="english">English</option>
                <option value="deutsch">Deutsch</option>
                <option value="français">Français</option>
                <option value="español">Español</option>
              </select>
              <select name="locations" id="location-select">
                <option value="">Choose a location</option>
                <option value="uk">UK</option>
                <option value="us">US</option>
                <option value="deutschland">Deutschland</option>
                <option value="france">France</option>
                <option value="españa">España</option>
              </select>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-bottom-left">
            <a href="#">Archive</a>
            <a href="#">Contact Us</a>
            <a href="#">Press Resources</a>
            <a href="#">Legal Info</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Imprint</a>
          </div>
          <div className="nav-bottom-right">
            <p>Made in Berlin</p>

            <img
              className="nav-bottom-logo"
              src="../../public/ableton.svg"
              alt="ableton logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
