import React, { useState, useEffect } from "react";
import './Home.css';
import Images from "../Images/Images";


const generateQuote = (setQuote) => {
  const Quotes = [
    "“Change is the end result of all true learning.” – Leo Buscaglia",
    "“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” – Malcolm X",
    "“An investment in knowledge pays the best interest.” –  Benjamin Franklin",
    "“The roots of education are bitter, but the fruit is sweet.” – Aristotle",
    "“Education is what remains after one has forgotten what one has learned in school.” – Albert Einstein",
    "“The more that you read, the more things you will know, the more that you learn, the more places you’ll go.”– Dr. Seuss",
    "“Sometimes even to live is an act of courage.” ~ Lucius Annaeus Seneca",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi",
    "“Education without values, as useful as it is, seems rather to make man a more clever devil.” ― C.S. Lewis",
    "“The learning process continues until the day you die.” – Kirk Douglas ",
    "“Education is the key to unlocking the world, a passport to freedom.” – Oprah Winfrey."
];
  let result = Math.floor(Math.random() * Quotes.length);
  setQuote(Quotes[result]);
};

const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    generateQuote(setQuote);
    const interval = setInterval(() => generateQuote(setQuote), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="container">
        <img className="myslides" src="images/University1.jpg" alt="uni" />
        <div className="l-intro">
          <p>The Artisans Of Scholarly Excellence</p>
          <h6>"Nurturing minds, shaping futures."</h6>
          <div className="quotes">
          <h2 id="quoteGeneration">{quote}</h2>
        </div>
        </div>
      </div>
      <div className="mover">
        <span className="glyphicon glyphicon-chevron-down"></span>
      </div>

      <Images/>
    </header>
  );
}

export default Home;