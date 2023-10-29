import React from 'react'
import Sidebar from "../Sidebar/Sidebar.js";
// import Widget from "../../../Components/Widget/Widget.js";
// import Chart from "../../../Components/Chart/Chart.js";

import './Dashboard.scss';
import Cards from '../Cards/Cards.jsx';
import Table from "../Table/Table.jsx";
// import PieChart from './pie/index.jsx';
import LineChart from './line/index.jsx';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Cards />
        </div>
        <Table />
          <LineChart />
          {/* <PieChart /> */}
       
      </div>
    </div>
  )
}

export default Dashboard;