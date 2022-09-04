import { useState } from "react";
import CardsMenu from "./CardsMenu";
import axios from "axios";

const RickAndMorty = () => {
  const [amount, setAmount] = useState(20);

  const getCharacters = async (amount) => {
    try {
      console.log("getCharacters executing");
      const list = [];
      for (let i = 1; i <= parseInt(amount); i++) {
        list.push(i);
      }
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${list}`
      );
      return response.data;
    } catch (err) {
      console.log("There was an error.", err);
    }
  };

  return (
    <div styles="width: 100%; height: 100%">
      <img src="../assets/images/rick.jpg" id='bg-img' alt="" />
      <div className="main-container">
        <div className="leftSide">
          <CardsMenu
            amount={amount}
            setAmount={setAmount}
            getCharacters={getCharacters}
          />
        </div>
        <div className="rightSide">
          <div className="card-container"></div>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
