import "./Levels.scss";
import { Link } from "react-router-dom";

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
      <Link to={"/coming"}>
        <Card title="Beginner" />
      </Link>
      <Link to={"/coming"}>
        <Card title="Intermediate" />
      </Link>
      <Link to={"/coming"}>
        <Card title="Advance" />
      </Link>
    </div>
  );
}
