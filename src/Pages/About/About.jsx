import React from "react";
import "./About.scss";
import InfoGrid from "../../Components/InfoGrid/InfoGrid.jsx";
import About from "../../Assets/Images/about.png";
import Icon from "../../Assets/Images/abouticon.png";

const AboutPage = () => {
  return (
    <div className="bn-sec about-container ">
      <div className="image-with-text-container">
        <img src={About} alt="YourImage" className="image" />
        <div className="text">
          About <span> Us</span>
        </div>
      </div>
      <div className="ab contain">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            Welcome to Burly Nutrition, your trusted partner on your fitness
            journey. We are dedicated to providing you with the highest quality
            gym supplements that fuel your workouts and help you achieve your
            fitness goals. At Burly Nutrition, our team of experts and
            nutritionists stands by your side, providing knowledge and guidance
            to help you make informed choices about your health and fitness. We
            believe that by equipping you with the right information, we're not
            just selling supplements – we're enabling transformation.
          </p>
        </div>

        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            Our mission is to craft gym supplements that redefine your fitness
            journey. We understand that your dedication, hard work, and goals
            are unique. That's why we offer a diverse range of supplements, each
            meticulously designed to cater to your distinct fitness needs,
            whether it's muscle building, weight loss, or all-around vitality.
            What sets us apart is our unwavering commitment to quality. We
            source the finest ingredients and uphold stringent quality
            standards, ensuring that every product we create stands as a
            testament to excellence. Whether you're a seasoned athlete or a
            newcomer to the gym, you can rely on our supplements to empower your
            workouts and amplify your results
          </p>
        </div>
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
