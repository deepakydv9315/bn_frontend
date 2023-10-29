import React from 'react';
// import './BlogCard.scss';

const BlogCard = ({ data }) => {
  const { image, title, date, author, description } = data;

  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <h3 className="blog-title">{title}</h3>
      <div className="blog-meta">
        <span className="blog-date">{date}</span>
        <span className="blog-author">{author}</span>
      </div>
      <p className="blog-description">{description}</p>
    </div>
  );
};

export default BlogCard;
