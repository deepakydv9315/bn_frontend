import React from 'react';
import blog1 from "../../Assets/Images/blog1.jpg";
import blog2 from "../../Assets/Images/blog2.jpg";
import blog3 from "../../Assets/Images/blog3.jpg";
import './BlogDetail.scss';
import pic from "../../Assets/Images/blog3.jpg";

const GridItem = ({ title, imageSrc, description, text }) => (
    // <div className="blog-detail">
      
    //     <img className="blog-img" src={imageSrc} alt={title} />
    //     <div className="blog-content">
    //       <h2 className="blog-title">{title}</h2>
    //       <span className="blog-desc">{description}</span>
    //       <span className="blog-text">{text}</span>
    //     </div>
    // </div>
    <div className="blog-detail">
      
        <img className="blog-img" src={imageSrc} alt={title} />
        <div className="blog-content">
          <h2 className="blog-title">Low-Carb Vs Low-Fat – Which Is Better For Weight Loss?</h2>
          <span className="blog-desc">This is desc</span>
          <span className="blog-text">this is text</span>
        </div>
    </div>
  );
const BlogDetail = () => {
    const data = [
        {
          title: "Low-Carb Vs Low-Fat – Which Is Better For Weight Loss?",
          imageSrc: blog1,
          description:
            "Diet diversity - explore which diet pattern works best for your weight loss goals...",
          text: "this is text",
        },
        {
          title: "6 Effective Strategies To Improve Digestion Naturally",
          imageSrc: blog2,
          description:
            "for improving digestion naturally...Adopting a holistic perspective is necessary for improving digestion naturally... naturally... naturally...",
    
          link: "",
        },
        {
          title: "5 Essential Self-Care Tips For a Stress-Free Life",
          imageSrc: blog3,
          description:
            "These little rituals, when followed consistently, lead to a happier and healthier life...",
          link: "",
        },
      ];
    
    return (
        // <div className="blog-detail">
        //     <img
        //         className="blog-image"
        //         src={pic} 
        //         alt="Blog"
        //     />
        //     <div className="blog-info">
        //         <h1 className="title1">Blog Title</h1>
        //         <br></br>
        //         <p className="blog-description">
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        //             ut quam auctor, tincidunt justo et, eleifend risus.
        //         </p>
        //     </div>
        // </div>
        <div className='blog-wrapper'>
            
        <GridItem
        //   key={index}
          imageSrc={data.imageSrc}
          title={data.title}
          description={data.description}
          text={data.text}
        />

        </div>
    );
};

export default BlogDetail;
