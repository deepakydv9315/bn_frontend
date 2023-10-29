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
        title="Body Building"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, autem."
      />
      <GridItem
        icon={<img src={Truck} alt="Like" />}
        title="Weight Loss"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, autem."
      />
      <GridItem
        icon={<img src={Truck} alt="Like" />}
        title="Lean Muscle Mass"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, autem."
      />
      <GridItem
        icon={<img src={Truck} alt="Like" />}
        title="Bulking Up"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, autem."
      />
    </div>
  );
}
