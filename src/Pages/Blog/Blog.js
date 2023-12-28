import React, { useState } from "react";
import "./Blog.scss";
import blog from "../../Assets/Images/blog.png";
import BlogCard from './BlogCard';
import b1 from "../../Assets/Images/b1.png";
import b2 from "../../Assets/Images/b2.png";
import b3 from "../../Assets/Images/b3.png";
import Coming from "../../Pages/ComingSoon/ComingSoon";
import ReadBlogs from "../../Components/Blogs/ReadBlogs";

const Blog = () => {
  const [sortBy, setSortBy] = useState('date'); // Initial sort option
  // const blogData = [
  //   {
  //     id: 1,
  //     image: b1,
  //     title: 'Low-Carb Vs Low-Fat – Which Is Better For Weight Loss?',
  //     date: 'October 10, 2023',
  //     author: 'John Doe',
  //     description:
  //       'Diet diversity - explore which diet pattern works best for your weight loss goals...'},
  //   {
  //     id: 2,
  //     image: b2,
  //     title: 'Blog Title 2',
  //     date: 'October 15, 2023',
  //     author: 'Jane Smith',
  //     description:
  //       'Vestibulum sed ipsum vitae mi condimentum suscipit. Vestibulum quis erat vitae purus lobortis interdum.',
  //   },
  //   {
  //     id: 3,
  //     image: b3,
  //     title: 'Blog Title 2',
  //     date: 'October 15, 2023',
  //     author: 'Jane Smith',
  //     description:
  //       'Vestibulum sed ipsum vitae mi condimentum suscipit. Vestibulum quis erat vitae purus lobortis interdum.',
  //   },
  //   {
  //     id: 4,
  //     image: b1,
  //     title: 'Blog Title 2',
  //     date: 'October 15, 2023',
  //     author: 'Jane Smith',
  //     description:
  //       'Vestibulum sed ipsum vitae mi condimentum suscipit. Vestibulum quis erat vitae purus lobortis interdum.',
  //   },
  // ];

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };


  return (
    <div className="blog">
      <div className="image-with-text-container">
        {/* <img src={blog} alt="YourImage" className="image" />
        <div className="text">
          Fitness <span>Blogs</span>
        </div> */}
      </div>
      <section className="blog-section">
        <div className="upper">
          <div className="headblog">Popular reads
          </div>
          {/* <div className="sort-by">
            <label>Sort By:</label>
            <select value={sortBy} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="month">Month</option>
            </select>
          </div> */}
        </div>
        <div className="blog-cards" >
          {/* {blogData.map((blog) => (
            <BlogCard key={blog.id} data={blog}/>
          ))} */}

<ReadBlogs />
        </div>
      </section>
    </div>
  );
};

export default Blog;
