import "../styles/Navbar.css";

const style = {
  background: "green",
  justifyContent: "flex-end"
};

export default function Navbar() {
  return (
    <nav className="navbar" style={style}>
      <a href="/">
        Welcome
      </a>
    </nav>
  );
}