export default function JSXVariables() {
  const name = "Ariuntulga";
  const letters = 10;
  const comment = "React is awesome";

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>My name is {name} which has {letters} letters.</h1>
          <h2>My name without any vowels is "{removeVowels(name)}".</h2>
          <p>
            {`I think ${comment}.`}
          </p>
        </div>
      </div>
    </div>
  );
}

function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return str.toLowerCase().split("").filter(c => !vowels.includes(c)); 
}