import React from 'react';
import './Report.scss';

const TablePage = () => {
    return (
        <div className="table-page">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className='title1' >Protein Lab <span>Report</span></div>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Type of Test</th>
                        <th>Result</th>
                        <th>Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Protein Percentage</td>
                        <td style={{ color: "lightgreen" }}>Pass</td>
                        <td style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>View Report</td>
                    </tr>
                    <tr>
                        <td>Heavy Metal</td>
                        <td style={{ color: "lightgreen" }}>Pass</td>
                        <td style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>View Report</td>
                    </tr>
                    <tr>
                        <td>Amino Acid Profile</td>
                        <td style={{ color: "lightgreen" }}>Pass</td>
                        <td style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>View Report</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;
