import '../styles/Header.css';

const style = { background: 'yellow', fontSize: '100px' };

export default function Header() {
  return (
    <header className='header' style={style}>
      <h1>Welcome</h1>
    </header>
  )
}