import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
const CarouselComp = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/image1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/image2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/image3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
