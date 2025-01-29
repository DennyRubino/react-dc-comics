import Logo from "../components/Logo";
const navLinks = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
];

export default function Header() {
  return (
    <header className="header-Container">
      <Logo width={60} />
      <nav>
        <ul className="header-nav">
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
