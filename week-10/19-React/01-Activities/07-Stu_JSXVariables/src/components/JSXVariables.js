const removeVowels = s => {
  const vowels = ['a','e','i','o','u','y'];
  return s.toLowerCase().split('').filter(c => !vowels.includes(c));
}

const name = 'Ariuntulga';
const len = name.length;
const comment = "React is awesome";

const JSXVariables = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='jumbotron'>
          <h1>My name is {name} which has {len} letters.</h1>
          <h2>My name without vowels is "{removeVowels(name)}".</h2>
          <p>
            {`I think ${comment}.`}
          </p>
        </div>
      </div>

    </div>
  )
}


export default JSXVariables;