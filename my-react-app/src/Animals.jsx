function HardcodeList() {
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

function MapItemInsideList() {
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

function MapItemOutsideList() {
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

function ListItem(props) {
  return <li>{props.animal}</li>;
}
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <FourthMethodListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}
function CreateList() {
  const animals = ["Lion", "Snake", "Eagle"];
  return (
    <>
      <h1>Animals</h1>
      <FourthMethodList animals={animals} />
    </>
  );
}

function TernaryList(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}
function AmpersandList(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
function ConditionalList(props) {
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
function CreateListAlt() {
  const animals = ["Lion", "Snake", "Eagle"];
  return (
    <>
      <h1>Animals</h1>
      <ConditionalList animals={animals} />
    </>
  );
}

export default CreateListAlt;
