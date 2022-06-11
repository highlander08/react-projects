import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, SetList] = useState(new Values("#f15025").all(10));
  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      SetList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>gerar cor</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            type="text"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            enviar
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              hexColor={color.hexColor}
              key={index}
              {...color}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
