import './InfoGrid.scss';  
import Banned from "../../Assets/Images/banned.png";
import FSSAI from "../../Assets/Images/fssai.png";
import Like from "../../Assets/Images/like.png";
import Protein from "../../Assets/Images/protein.png";


const GridItem = ({ imageSrc, title, description }) => {
  return (
    <div className="grid-item">
      <div className="icon"><img src={imageSrc} alt={title} /></div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default function GridComponent() {

  const info = [
    {
     imageSrc: Like,
     title: "Unmatched Quality",
     description: "Stringent processes and guideline to ensure that best quality reaches you."
    },
    {
      imageSrc: Protein,
      title: "Protein Content Certified",
      description: "An INDEPENDENT NABL accredited lab for the protein content claimed on the label"
     },
     {
      imageSrc: FSSAI,
      title: "FSSAI Approved",
      description: "Manufactured in FSSAI Approved manufacturing facility."
     },
     {
      imageSrc: Banned,
      title: "No Banned Substance",
      description: "We ensure that all our products contain no banned substances and are DOPE FREE"
     },
  ]

  return (
    <div className='grid-container'>
      {info.map((info, index) => (
        <GridItem 
        key={index}
        imageSrc={info.imageSrc}
        title={info.title}
        description={info.description}/>
      ))}
    </div>
  );
}
