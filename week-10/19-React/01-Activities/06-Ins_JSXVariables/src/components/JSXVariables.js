const name = 'Ariuntulga Tserendavaa';
const [a, b] = [1, 2];

const JSXVariables = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='jumbotron'>
          <h2>My name is {name}. But you can call me ...</h2>
          <h1>The JSX Boss!</h1>
          <hr />
          <h2>I can do math: {a + b}.</h2>
          <h2>I can generate random numbers: {Math.random()  * 10 | 0 + 1}, {Math.random() * 10 | 0 + 1}, {Math.random() * 10 | 0 + 1}.</h2>
          <h2>I can even reverse my name: {name.split('').reverse()}</h2>
        </div>
      </div>
    </div>
  )
}

export default JSXVariables;