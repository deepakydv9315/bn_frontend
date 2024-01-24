import "./InfoGrid.scss";
import Banned from "../../Assets/Images/banned.png";
import FSSAI from "../../Assets/Images/fssai.png";
import Like from "../../Assets/Images/like.png";
import Protein from "../../Assets/Images/protein.png";

const GridItem = ({ imageSrc, title, description }) => {
  return (
    <div className="grid-item">
      <div className="icon">
        <img src={imageSrc} alt={title} />
      </div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default function GridComponent() {
  const info = [
    {
      imageSrc: Like,
      description: "100% Safe & Secure Payments",
    },
    {
      imageSrc: Protein,
      description: "Free Shipping",
    },
    {
      imageSrc: FSSAI,
      description: "Authenticity Guaranteed",
    },
    {
      imageSrc: Banned,
      description: "Made in India",
    },
  ];

  return (
    <div className="grid-container">
      {info.map((info, index) => (
        <GridItem
          key={index}
          imageSrc={info.imageSrc}
          description={info.description}
        />
      ))}
    </div>
  );
}
