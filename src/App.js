import ChocolateCards from "./components/Cards";
import CarouselComp from "./components/Carousel";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Heading
        data={"Assignment 1: Create a Product Carousel for Featured Products"}
      />
      <CarouselComp />
      <Heading
        data={
          "Assignment 2: Develop a Customizable Product Bundle for Chocolate brand"
        }
      />
      <ChocolateCards />
      <div className="display-6 bg-warning p-2 text-center">
        Note: For explanation read assignment1.txt and assignment2.txt
      </div>
    </div>
  );
}

export default App;
