import React from 'react';
import './Goals.scss';
import Truck from "../../Assets/Images/truck.png"

const GridItem = ({ icon, title, description }) => {
  return (
    <div className="goals-item">
      <div className="goals-icon">{icon}</div>
      <h2 className="goals-title">{title}</h2>
      <p className="goals-description">{description}</p> 
    </div>
  );
};

export default function Goals() {
  return (
    <div className="goals-container">
      <GridItem
        icon={<img src={Truck} alt="Like" />}
        title="Bulking Up"
        description="Build healthy muscle mass with our selection of gainers, designed to help you gain muscle, bulk up, and cultivate a stronger, more robust physique for an overall healthier body."
      />
      <GridItem
        icon={<img src={Truck} alt="Like" />}
        title="Weight Loss"
        description="Achieve healthy weight loss by using our products designed to effectively burn excess fat."
      />
      <GridItem
        icon={<img src={Truck} alt="Like" />}
        title="Lean Muscle Mass"
        description="Refine your physique by building lean muscle mass for a toned, defined, and ripped look."
      />
    </div>
  );
}
