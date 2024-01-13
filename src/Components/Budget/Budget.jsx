import "./Budget.scss";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="budget-card">
      <p className="budget-title">{title}</p>
    </div>
  );
};

export default function Budget() {
  const budgets = [
    {
      imageSrc: "https://i.ibb.co/0j0hZCp/2999.jpg",
      link: "/products?under=2999",
      title: "₹2999",
    },
    {
      imageSrc: "https://i.ibb.co/0j0hZCp/2999.jpg",
      link: "/products?under=3999",
      title: "₹3999",
    },
    {
      imageSrc: "https://i.ibb.co/0j0hZCp/2999.jpg",
      link: "/products?under=4999",
      title: "₹4999",
    },
  ];
  return (
    <div className="budgets-container">
      {budgets.map((budget) => (
        <Link to={budget.link}>
          <Card imageSrc={budget.imageSrc} title={budget.title} />
        </Link>
      ))}
    </div>
  );
}
