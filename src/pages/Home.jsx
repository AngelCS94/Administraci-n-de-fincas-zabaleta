import React from "react";
import posts from "../data/Posts";
import BlogPost from "../components/BlogPost";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="home">
          {posts.map((post, index) => (
            <div key={index} className="post-wrapper">
              <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
              <BlogPost fileName={post.fileName} />
              <p className="gist-link">
                <a href={post.gistLink} target="_blank" rel="noopener noreferrer">
                <img src="/enlace.png" alt="GitHub" className="enlace-image" />
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
