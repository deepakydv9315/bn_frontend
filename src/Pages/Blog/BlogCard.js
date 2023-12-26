import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/blogdetail');
  };
  const { image, title, date, author, description } = data;

  return (
    <div className="blog-card" onClick={handleNavigation}>
      <img src={image} alt={title} className="bi-img" />
      <div className='bi-content'>
        <h3 className="bi-title">{title}</h3>
        <span className="bi-desc">{description}</span>
      </div>
    </div>
  );
};

export default BlogCard;
