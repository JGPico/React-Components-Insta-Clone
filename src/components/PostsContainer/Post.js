// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";


const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.dataProps.likes);

  const incrementLikes = () => {
    setLikes(likes => likes + 1);
  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.dataProps.username}
        thumbnailUrl={
          props.dataProps.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.dataProps.imageUrl}
        />
      </div>
      <LikeSection incrementLikes={incrementLikes} likes={likes}/>
      <CommentSection
        postId={props.dataProps.imageUrl}
        comments={props.dataProps.comments}
      />
    </div>
  );
};

export default Post;


