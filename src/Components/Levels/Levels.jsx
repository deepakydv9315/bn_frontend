import './Levels.scss';


const Card = ({ imageSrc, title }) => {
  return (
    <div className="level-card">
      <h2 className="level-title">{title}</h2>
    </div>
  );
};

export default function Levels() {
  return (
    <div className="levels-container">
      <Card 
        title="Beginner"
      />
      <Card
        title="Intermediate"
      />
      <Card
        title="Advance"
      />
    </div>
  );
}
