

import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css"; 
import dummydata from "../../dummy-data";

const PostsPage = () => {
  const [data] = useState(dummydata);
  return (
    <div className="posts-container-wrapper">
      {data.map(element => (
        <Post key={element.id} dataProps={element}/>
      ))}
    </div>
  );
};

export default PostsPage;

