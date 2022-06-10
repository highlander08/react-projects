import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
// [0,1,2,3] array tem 4 posições
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(people.length - 1);

  const checkNumber = (number) => {
    // se a variavel(number) for  maior do que a ultima posição do array faça algo
    // se a variavel se tornar maior do que a ultima posição do array volte para a posição inicial do array.
    if (number > people.length - 1) {
      return 0;
    }
    // se a variavel(number) for menor do que 0 va para a ultima posição do array
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    return setIndex(checkNumber(index + 1));
    // setIndex(() => {
    //   let NewIndex = index + 1;
    //   return checkNumber(NewIndex);
    // });
  };

  const prevPerson = () => {
    return setIndex(checkNumber(index - 1));
    // setIndex(() => {
    //   let NewIndex = index - 1;
    //   return checkNumber(NewIndex);
    // });
  };

  const randomPerson = () => {
    // numero aletario entre 1 a 3
    let randomNumber = Math.floor(Math.random() * people.length);
    // se o numero de 1 a 3 for igual a posição do estado some mais um
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <em className="job">{job}</em>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Aleatorio
      </button>
    </article>
  );
};

export default Review;
