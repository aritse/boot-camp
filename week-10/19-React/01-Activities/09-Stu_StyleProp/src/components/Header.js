import "../styles/Header.css";

const style = {
  background: "red",
  fontSize: 100
};

export default function Header() {
  return (
    <header className="header" style={style}>
      <h1>
        Welcome
      </h1>
    </header>
  );
}