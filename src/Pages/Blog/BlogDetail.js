import React from 'react';
import './BlogDetail.scss';
import pic from "../../Assets/Images/blog3.jpg";

const BlogDetail = () => {
    return (
        <div className="blog-detail">
            <img
                className="blog-image"
                src={pic} 
                alt="Blog"
            />
            <div className="blog-info">
                <h1 className="title1">Blog Title</h1>
                <br></br>
                <div className="blog-meta">
                    <p className="blog-time">Published on: November 18, 2023</p>
                    <p className="blog-author">Author: John Doe</p>
                </div>
                <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    ut quam auctor, tincidunt justo et, eleifend risus.
                </p>
            </div>
        </div>
    );
};

export default BlogDetail;
