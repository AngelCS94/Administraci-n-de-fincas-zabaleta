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
              <p className="post-date">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <BlogPost gistUrl={post.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
