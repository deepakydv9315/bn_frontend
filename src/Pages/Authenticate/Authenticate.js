import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCode } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import './Authenticate.scss';
import authenticate from "../../Assets/Images/authenticate.jpeg";
import repo1 from "../../Assets/Images/repo1.png";
import repo2 from "../../Assets/Images/repo2.png";
import { useNavigate } from 'react-router-dom';
import Coming from "../../Components/ComingSoon/ComingSoon";

const Authenticate = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/report');
  };

  return (
    <>
      <div className="image-with-text-container">
        <img src={authenticate} alt="YourImage" className="image" />
        <div className="text">
          Healthy <span>Recipes</span>
        </div>
      </div>
      <div className="tab-container">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
          <FontAwesomeIcon icon={faCoffee} />
          <span>Check Authenticity</span>
        </div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
          <FontAwesomeIcon icon={faCode} />
          <span>Lab Reports</span>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div className="tab1-content">
            <div className="content-container">
              <h2 style={{ display: "flex", justifyContent: "space-between" }} className='title1'>Check Authenticity</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Know if your Burly Nutrition is authentic</p>
                <p>Check unique code here</p>
              </div>
              <br></br>
              <form>
                <div className="form-input" >
                  <label htmlFor="name" style={{ display: "flex", justifyContent: "space-between" }}>Enter Unique Code:</label>
                  <input type="text" id="name" placeholder="eg. #H4582F2" />
                </div>
                <div className="form-input">
                  <label htmlFor="email" style={{ display: "flex", justifyContent: "space-between" }}>Mobile:</label>
                  <input type="email" id="email" placeholder="Enter your Mobile Number" />
                </div>
                <div className="form-input">
                  <label htmlFor="password" style={{ display: "flex", justifyContent: "space-between" }}>Email (optional):</label>
                  <input type="password" id="password" placeholder="Enter your Email ID (optional)" />
                </div>
                <button>Submit</button>
                <div className="checkbox-container">
                  <input type="checkbox" id="checkbox" className="checkbox" />
                  <label htmlFor="checkbox">Subscribe me to articles, deals and more!</label>
                </div>
              </form>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab2-content">
            <Coming/>
            {/* <div className="section ">
              <h2 className='title1' style={{ display: "flex", justifyContent: "space-between" }}>Protein</h2>
              <div className="image-container">
                <div className="image">
                  <div className="image-content">
                    <img src={repo1} alt="Image1" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1' >View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="image-content">
                    <img src={repo2} alt="Image2" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1'>View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="image-content">
                    <img src={repo1} alt="Image1" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1'>View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="image-content">
                    <img src={repo2} alt="Image2" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1'>View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="section ">
              <h2 className='title1' style={{ display: "flex", justifyContent: "space-between" }}>Energy Drinks</h2>
              <div className="image-container">
                <div className="image">
                  <div className="image-content">
                    <img src={repo1} alt="Image1" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1' >View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="image-content">
                    <img src={repo2} alt="Image2" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1'>View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="image-content">
                    <img src={repo1} alt="Image1" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1'>View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="image-content">
                    <img src={repo2} alt="Image2" />
                    <div class="image-button" onClick={handleNavigation}>
                      <h3 className='title1'>View Report</h3>
                      <button class="right-arrow">➜</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Authenticate;
