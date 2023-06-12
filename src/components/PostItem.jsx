import React from "react";
import MyButton from "./UI/button/MyButton";
import Comment from "./Comment";
import { Link } from 'react-router-dom';
import SelectedPost from "../pages/SelectedPost";
import AppRouter from "./UI/AppRouter";

const PostItem = (props) => {
  

    console.log(props)
    return (
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
          <div className="post__btns">
            <MyButton onClick={() => props.remove(props.post)}>
                Удалить
            </MyButton>
            <Link to={`/posts/${props.post.id}`}>
              <MyButton post={props}>
                  Открыть
              </MyButton>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default PostItem;