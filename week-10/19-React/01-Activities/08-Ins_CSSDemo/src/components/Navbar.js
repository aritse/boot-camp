import "./Navbar.css";

const styles = {
  card: { margin: '20px', background: 'blue' },
  heading: {
    background: '#9a74db',
    minHeight: '50px',
    lineHeight: '3.5',
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    fontWeight: 'bold'
  }
};

export default function Navbar() {
  return (
    <div style={styles.card}>
      <nav style={styles.heading}>Nav</nav>
    </div>
  )
}
