export default function Main() {
  return (
    <main>
      <hero>
        <div className="hero-container"></div>
      </hero>
      <div className="main-container-1">
        <p className="content-container-1">
          ---{">"}Content goes here {"<"}---
        </p>
      </div>
      <div className="main-container-2">
        <nav className="main-nav">
          <ul>
            <li>
              <img
                src="public/img/buy-comics-digital-comics.png"
                className="main-img "
              ></img>
              <span>DIGITAL COMICS</span>
            </li>
            <li>
              <img
                src="public/img/buy-comics-merchandise.png"
                className="main-img "
              ></img>
              <span>DC MERCHANDISE</span>
            </li>
            <li>
              <img
                src="public/img/buy-comics-subscriptions.png"
                className="main-img "
              ></img>
              <span>SUBSCRIPTION</span>
            </li>
            <li>
              <img
                src="public/img/buy-comics-shop-locator.png"
                className="main-img "
              ></img>
              <span>COMIC SHOP LOCATOR</span>
            </li>
            <li>
              <img
                src="public/img/buy-dc-power-visa.svg"
                className="main-img "
              ></img>
              <span> DC POWER VISA</span>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
