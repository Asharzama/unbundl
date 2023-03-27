import { useEffect, useState } from "react";
import "./Cards.css";

const ChocolateCards = () => {
  // State Management
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [numberOfDarkChocolate, setNumberOfDarkChocolate] = useState(0);
  const [numberOfBrownChocolate, setNumberOfBrownChocolate] = useState(0);
  const [numberOfWhiteChocolate, setNumberOfWhiteChocolate] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Functions
  useEffect(() => {
    setTotalCost(
      numberOfDarkChocolate * priceDark +
        numberOfBrownChocolate * priceBrown +
        numberOfWhiteChocolate * priceWhite
    );
  }, [numberOfDarkChocolate, numberOfBrownChocolate, numberOfWhiteChocolate]);

  // Price of Chocolates
  const priceDark = 80,
    priceBrown = 60,
    priceWhite = 90;

  // Array of Chocolates
  const chocolateArray = [
    {
      source: "dark-chocolate",
      name: "Dark Chocolate",
      price: priceDark,
      numberOfChocolate: numberOfDarkChocolate,
      setNumberOfChocolate: setNumberOfDarkChocolate,
    },
    {
      source: "brown-chocolate",
      name: "Brown Chocolate",
      price: priceBrown,
      numberOfChocolate: numberOfBrownChocolate,
      setNumberOfChocolate: setNumberOfBrownChocolate,
    },
    {
      source: "white-chocolate",
      name: "White Chocolate",
      price: priceWhite,
      numberOfChocolate: numberOfWhiteChocolate,
      setNumberOfChocolate: setNumberOfWhiteChocolate,
    },
  ];

  return (
    <div className="cards_container">
      {/* Total cost Section */}
      {
        <div className="display_section">
          {numberOfItems !== 0
            ? `Total Cost : Rs. ${totalCost}`
            : "Customize your pack"}
        </div>
      }

      {/* Chocolate Cards */}
      <div className="cards_wrapper">
        {/* Chocolate Cards */}
        {chocolateArray.map((item, index) => (
          <div className="chocolate_card" key={index}>
            <img
              src={`images/${item.source}.jpg`}
              className="image"
              alt={`${item.source}`}
            />
            <div className="card_body">
              <h2>{item.name}</h2>
              <p>Rs. {item.price}.00</p>
              <ButtonFunction
                numberOfChocolate={item.numberOfChocolate}
                setNumberOfChocolate={item.setNumberOfChocolate}
                numberOfItems={numberOfItems}
                setNumberOfItems={setNumberOfItems}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ButtonFunction = ({
  numberOfChocolate,
  setNumberOfChocolate,
  numberOfItems,
  setNumberOfItems,
}) => {
  const ChocolateIncrement = (callback) => {
    callback((prev) => prev + 1);
    ItemIncrement();
  };

  const ChocolateDecrement = (callback) => {
    callback((prev) => prev - 1);
    ItemDecrement();
  };

  const ItemIncrement = () => {
    setNumberOfItems((prev) => prev + 1);
  };

  const ItemDecrement = () => {
    setNumberOfItems((prev) => prev - 1);
  };

  return (
    <div className="d-flex align-item-center">
      <button
        disabled={numberOfItems === 8 ? true : false}
        className="custom-button"
        onClick={() => ChocolateIncrement(setNumberOfChocolate)}
      >
        +
      </button>
      {numberOfChocolate !== 0 ? (
        <span>
          <span className="item_number">{numberOfChocolate}</span>
          <button
            className="custom-button"
            onClick={() => ChocolateDecrement(setNumberOfChocolate)}
          >
            -
          </button>
        </span>
      ) : null}
    </div>
  );
};
export default ChocolateCards;
