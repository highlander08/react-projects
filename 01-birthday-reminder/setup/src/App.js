import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  console.log(people)
  return (
    <main>
      <section className="container">
        <h3> {people.length} aniversario hoje</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Limpar Tudo</button>
      </section>
    </main>
  );
}

export default App;
