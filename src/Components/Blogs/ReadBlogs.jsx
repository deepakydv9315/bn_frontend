import "./ReadBlogs.scss";
import blog1 from "../../Assets/Images/blog1.jpg";
import blog2 from "../../Assets/Images/blog2.jpg";
import blog3 from "../../Assets/Images/blog3.jpg";
import { Link } from "react-router-dom";

const GridItem = ({ title, imageSrc, description, link }) => (
  <a href={link} className="blog-item">
    <Link to={link}>
      <img className="bi-img" src={imageSrc} alt={title} />
      <div className="bi-content">
        <h2 className="bi-title">{title}</h2>
        <span className="bi-desc">{description}</span>
      </div>
    </Link>
  </a>
);

const ReadBlogs = () => {
  const data = [
    {
      title: "How Creatine Helps You Gain Muscle and Strength",
      imageSrc: blog1,
      description:
        "Burly Creatine Monohydrate is an ultimate workout supplement that is sure to boost your workout performance. It is an ideal source of pure and unadulterated creatine monohydrate.If you are into hardcore training and heavy weightlifting..",
      link: "/Blog1",
    },
    {
      title: "How Much Protein Are You Required To Eat Per Day For Muscle Building?",
      imageSrc: blog2,
      description:
        "You’ve likely heard the age-old advice: “Eat more protein.” While this advice is undoubtedly true, it’s crucial to understand just how much Protein to eat per day to maximize your muscle-building efforts.",

      link: "/Blog2",
    },
    {
      title: "5 Reasons You Should Start Going To The Gym Today",
      imageSrc: blog3,
      description:
        "In today’s world, people lead sedentary lifestyles due to various reasons like work demands, technology, and laziness. As a result, many of us are facing health problems such as obesity..",
      link: "/Blog3",
    },
  ];

  return (
    <div className="blog-container">
      {data.map((item, index) => (
        <GridItem
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ReadBlogs;
