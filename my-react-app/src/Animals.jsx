function FirstMethod() {
  return (
    <>
      <h1>Animals</h1>
      <ul>
        <li>Lion</li>
        <li>Snake</li>
        <li>Eagle</li>
      </ul>
    </>
  );
}

function SecondMethod() {
  const animals = ["Lion", "Snake", "Eagle"];

  return (
    <>
      <h1>Animals</h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
}

function ThirdMethod() {
  const animals = ["Lion", "Snake", "Eagle"];
  const animalsList = animals.map((animal) => {
    return <li key={animal}>{animal}</li>;
  });

  return (
    <>
      <h1>Animals</h1>
      <ul>{animalsList}</ul>
    </>
  );
}

function FourthMethodListItem(props) {
  return <li>{props.animal}</li>;
}
function FourthMethodList(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <FourthMethodListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}
function FourthMethod() {
  const animals = ["Lion", "Snake", "Eagle"];
  return (
    <>
      <h1>Animals</h1>
      <FourthMethodList animals={animals} />
    </>
  );
}

function FifthMethodListTernary(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}
function FifthMethodListAmpersand(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
function FifthMethodListConditional(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
function FifthMethod() {
  const animals = ["Lion", "Snake", "Eagle"];
  return (
    <>
      <h1>Animals</h1>
      <FifthMethodListConditional animals={animals} />
    </>
  );
}

export default FifthMethod;
