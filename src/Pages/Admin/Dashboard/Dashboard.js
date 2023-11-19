import React from 'react'
import Sidebar from "../Sidebar/Sidebar.js";
import './Dashboard.scss';
import Cards from '../Cards/Cards.jsx';
import Table from "../Table/Table.jsx";
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
      </div>
    </div>
  )
}

export default Dashboard;