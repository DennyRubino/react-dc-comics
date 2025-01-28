export default function Header() {
  return (
    <header className="header-Container">
      <img
        className="img-header"
        src="public/img/dc-logo.png"
        alt="DC logo"
      ></img>
      <nav>
        <ul className="header-nav">
          <li>CHARACTERS</li>
          <li>COMICS</li>
          <li>MOVIES</li>
          <li>TV</li>
          <li>GAMES</li>
          <li>COLLECTIBLES</li>
          <li>VIDEOS</li>
          <li>FANS</li>
          <li>NEWS</li>
          <li>SHOP</li>
        </ul>
      </nav>
    </header>
  );
}
