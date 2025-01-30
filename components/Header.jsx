import Logo from "../components/Logo";
import navLinks from "../data/Header-nav";

export default function Header() {
  return (
    <header className="header-Container">
      <Logo width={60} />
      <nav>
        <ul className="header-nav">
          {navLinks.map((link, index) => (
            <li key={index}>{link.text}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
