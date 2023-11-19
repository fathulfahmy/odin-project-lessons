import React, { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    // copy the existing person object into a new object while updating the age property
    const newPerson = { ...person, age: person.age + 1 };

    setPerson(newPerson);

    // newPerson is not latest state but initial state
    setPerson(newPerson);
  };

  const handleIncreaseAgeTwice = () => {
    // passing callback function to pass the latest state
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <button onClick={handleIncreaseAgeTwice}>Increase age twice</button>

      {/* control components by updating native HTML internal state*/}
      <input
        type="text"
        value={person.age}
        onChange={(event) => {
          event.target.value;
        }}
      />
    </>
  );
}

export default Person;
