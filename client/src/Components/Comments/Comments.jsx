import React, { useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";
function Comments() {
  const [commentText, setCommentText] = useState("");

  const commentList = [
    {
      id: "1",
      commentBody: "hello",
      userCommented: "abc",
    },
    {
      id: "2",
      commentBody: "hii",
      userCommented: "bc",
    },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="add comment"
          className="comment_ibox"
        />
        <input type="text" value="add" className="comment_add_btn_comments" />
      </form>
      <div className="display_comment_container">
        {commentList.map((m) => {
          return (
            <DisplayComments
              cId={m.id}
              commentBody={m.commentBody}
              userCommented={m.userCommented}
            />
          );
        })}
      </div>
    </>
  );
}

export default Comments;
