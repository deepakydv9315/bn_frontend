import './Budget.scss';

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
      <Card 
        title="₹2999"
      />
      <Card
        title="₹3999"
      />
      <Card
        title="₹4999"
      />
    </div>
  );
}