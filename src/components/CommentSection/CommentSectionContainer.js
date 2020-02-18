
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [commentBit] = useState(props.comments);

  return (
    <div>
      {commentBit.map(element => (
        <Comment comment = {element}/>
      ))}
      <CommentInput/>
    </div>
  );
};

export default CommentSection;
