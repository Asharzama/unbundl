import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const ChocolateCards = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [numberOfDarkChocolate, setNumberOfDarkChocolate] = useState(0);
  const [numberOfBrownChocolate, setNumberOfBrownChocolate] = useState(0);
  const [numberOfWhiteChocolate, setNumberOfWhiteChocolate] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(
      numberOfDarkChocolate * priceDark +
        numberOfBrownChocolate * priceBrown +
        numberOfWhiteChocolate * priceWhite
    );
  }, [numberOfDarkChocolate, numberOfBrownChocolate, numberOfWhiteChocolate]);
  const priceDark = 80,
    priceBrown = 60,
    priceWhite = 90;
  return (
    <div className="container">
      {
        <div className="display_section">
          {numberOfItems !== 0
            ? `Total Cost : Rs. ${totalCost}`
            : "Customize your pack"}
        </div>
      }
      <div className="d-lg-flex d-md-block justify-content-around">
        <Card>
          <Card.Img
            variant="top"
            src="images/dark-chocolate.jpg"
            className="image"
          />
          <Card.Body>
            <Card.Title>Dark Chocolate</Card.Title>
            <Card.Text>Rs. {priceDark}.00</Card.Text>
            <ButtonFunction
              numberOfChocolate={numberOfDarkChocolate}
              setNumberOfChocolate={setNumberOfDarkChocolate}
              numberOfItems={numberOfItems}
              setNumberOfItems={setNumberOfItems}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="images/brown-chocolate.jpg"
            className="image"
          />
          <Card.Body>
            <Card.Title>Brown Chocolate</Card.Title>
            <Card.Text>Rs. {priceBrown}.00</Card.Text>
            <ButtonFunction
              numberOfChocolate={numberOfBrownChocolate}
              setNumberOfChocolate={setNumberOfBrownChocolate}
              numberOfItems={numberOfItems}
              setNumberOfItems={setNumberOfItems}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="images/white-chocolate.jpg"
            className="image"
          />
          <Card.Body>
            <Card.Title>White Chocolate</Card.Title>
            <Card.Text>Rs. {priceWhite}.00</Card.Text>
            <ButtonFunction
              numberOfChocolate={numberOfWhiteChocolate}
              setNumberOfChocolate={setNumberOfWhiteChocolate}
              numberOfItems={numberOfItems}
              setNumberOfItems={setNumberOfItems}
            />
          </Card.Body>
        </Card>
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
      <Button
        disabled={numberOfItems === 8 ? true : false}
        className="custom-button"
        onClick={() => ChocolateIncrement(setNumberOfChocolate)}
      >
        +
      </Button>
      {numberOfChocolate !== 0 ? (
        <span>
          <span className="item_number">{numberOfChocolate}</span>
          <Button
            className="custom-button"
            onClick={() => ChocolateDecrement(setNumberOfChocolate)}
          >
            -
          </Button>
        </span>
      ) : null}
    </div>
  );
};
export default ChocolateCards;
