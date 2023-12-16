import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 2,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 3,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 4,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 5,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 6,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 7,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 8,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 9,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
  {
    id: 10,
    image: require("../../Assets/Images/div.offer-box.png"),
  },
];

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id} className="carousel">
          <div className="carousel-img"
          style={{ padding: "30px 0px" }}
          >
    
            <img
              src={image.image}
              alt={image.name}
              style={{ height: "100px" }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
