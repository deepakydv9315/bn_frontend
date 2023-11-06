import React from "react";
import "./About.scss";
import InfoGrid from "../../Components/InfoGrid/InfoGrid.jsx";
import About from "../../Assets/Images/about.png";
import Icon from "../../Assets/Images/abouticon.png";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="image-with-text-container">
        <img src={About} alt="YourImage" className="image" />
        <div className="text">
          About <span> Us</span>
        </div>
      </div>
      <div className="about-text">
        <h3>Our Story</h3>
        <p>
          Being the pioneers of Effervescent Nutrition and introducing it in our
          country was not easy. The brand you see today is the amalgamation of
          every talk that was given to explain the benefits of effervescent
          nutrition. When we promise a New Start to a Healthy Life, we start
          with the basics - The Right Nutrition. It begins within. Keeping that
          in mind, we focus on providing quality nutrition that caters to every
          individual's needs. We started with a single product - Fast&Up Reload
          and today we are available in multiple categories with many products.
          We are proud to say that we provide 100% Quality Plant Based nutrition
          and are the only brand to be Informed Sport & Choice certified for our
          flagship products. Every batch of our flagship products are tested in
          the UK and hence, our promise of quality is tested, validated and
          trusted. From explaining please don't consume without water to today
          being synonymous with Drop-Fizz-Drink has only been possible cause of
          the passionate team that believes in the brand and our promise. We are
          the original effervescent nutrition brand. We are Fast&Up.
        </p>
      </div>
      <div className="center-heading">
        <div className="title1">
          If you want an Active life, it Begins with{" "}
          <span>
            <br></br> Burly Nutrition
          </span>
        </div>
      </div>
      <div className="info-grid">
        <InfoGrid />
      </div>
    </div>
  );
};

export default AboutPage;
