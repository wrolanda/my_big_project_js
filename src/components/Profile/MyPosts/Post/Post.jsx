import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
   return (
      <div className={classes.postElem}>
         <UserInfo whoPostName={props.whoPostName}/>
         <PostData key={props.id}
                   message={props.message}
                   likesCount={props.likesCount}
                   imgUrl={props.imgUrl}
         />
         <div>
            <span className={classes.like}>
					like {props.likesCount}
            </span>
         </div>
      </div>
   )
};

const UserInfo = (props) => {
   return (
      <div className={classes.UserInfo}>
         <div className={classes.avatar}>
            <img
               src="data:image/png;base64,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"/>
         </div>
         <div className={classes.whoPostName}>
            {props.whoPostName}
         </div>
      </div>
   )
};

const PostData = (props) => {
   return (
      <div className={classes.postData}>
         {props.message}
         {props.imgUrl &&
         <div>
            <img src={props.imgUrl}/>
         </div>}
      </div>
   )
};

export default Post;