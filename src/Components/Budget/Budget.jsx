import "./Budget.scss";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="budget-card">
      <h2 className="budget-title">{title}</h2>
    </div>
  );
};

export default function Budget() {
  return (
    <div className="budgets-container">
      <Link to={"/products"}>
        <Card title="₹2999" />
      </Link>
      <Link to={"/products"}>
        <Card title="₹3999" />
      </Link>
      <Link to={"/coming"}>
        <Card title="₹4999" />
      </Link>
    </div>
  );
}
