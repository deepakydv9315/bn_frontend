import "./ReadBlogs.scss";
import blog1 from '../../Assets/Images/blog1.jpg';
import blog2 from '../../Assets/Images/blog2.jpg';
import blog3 from '../../Assets/Images/blog3.jpg';


const GridItem = ({ title, imageSrc, description, link }) => (
  <a href={link} className="blog-item">
    <img className="bi-img" src={imageSrc} alt={title} />
    <div className="bi-content">
      <h2 className="bi-title">{title}</h2>
      <span className="bi-desc">{description}</span>
    </div>
    {/* <button className="btn">Read More</button> */}
  </a>
);

const ReadBlogs = () => {
  const data = [
    {
      title: 'Low-Carb Vs Low-Fat – Which Is Better For Weight Loss?',
      imageSrc: blog1,
      description: 'Diet diversity - explore which diet pattern works best for your weight loss goals...',
      link: '',
    },
    {
      title: '6 Effective Strategies To Improve Digestion Naturally',
      imageSrc: blog2,
      description: 'for improving digestion naturally...Adopting a holistic perspective is necessary for improving digestion naturally... naturally... naturally...',

      link: '',
    },
    {
      title: '5 Essential Self-Care Tips For a Stress-Free Life',
      imageSrc: blog3,
      description: 'These little rituals, when followed consistently, lead to a happier and healthier life...',
      link: '',
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
