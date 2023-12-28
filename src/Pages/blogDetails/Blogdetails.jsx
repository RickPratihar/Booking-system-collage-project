import React from "react";
import "./blogDetails.css";
import Navbar from "../../components/navbar/Navbar";
import blogData from "../../data/blogData";
import { useParams } from "react-router-dom";

const Blogdetails = () => {
  // let { BlogId } = useParams();

  // const blogItem = blogData.find((p) => p.id == BlogId);
  let { blogid } = useParams();

  const blogItem = blogData.find((p) => p.id == blogid);
  return (
    <>
      <Navbar />

      <div className="blog-hero-img">
        <img src={blogItem.blogImg4} alt="" />
      </div>

      <div className="main-section">
        <div className="blog-header">
          <h1>{blogItem.title}</h1>
          <hr className="divider" />
          <span>{blogItem.date}</span>
        </div>
      </div>
      <div className="section1">
        <p>{blogItem.des1}</p>
        <h2>{blogItem.blogImgTitle1}</h2>
        <img src={blogItem. blogImg1} alt="" />
        <p>{blogItem.des2}</p>

        <h2>{blogItem.blogImgTitle2}</h2>
        <img src={blogItem.blogImg2} alt="" />
        <p>{blogItem.des3}</p>

        <h2>{blogItem.blogImgTitle3}</h2>
        <img src={blogItem.blogImg1} alt="" />
        <p>{blogItem.des4}</p>
      </div>
    </>
  );
};

export default Blogdetails;
