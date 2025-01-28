export default function Footer() {
  return (
    <footer>
      <div className="footer-container-1">
        <div className="footer-links">
          <div className="footer-column">
            <h2>DC COMICS</h2>
            <ul>
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>SHOP</h2>
            <ul>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>DC</h2>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>SITES</h2>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>
        </div>
        <img src="/img/dc-logo-bg.png" className="footer-img" alt="DC Logo" />
      </div>

      <div className="footer-container-2">
        <button className="signup-btn">SIGN-UP NOW!</button>
        <div className="channels">
          <p>FOLLOW US</p>
          <nav>
            <ul>
              <li>
                <img src="/img/footer-facebook.png" alt="Facebook" />
              </li>
              <li>
                <img src="/img/footer-youtube.png" alt="YouTube" />
              </li>
              <li>
                <img src="/img/footer-twitter.png" alt="Twitter" />
              </li>
              <li>
                <img src="/img/footer-pinterest.png" alt="Pinterest" />
              </li>
              <li>
                <img src="/img/footer-periscope.png" alt="Periscope" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
