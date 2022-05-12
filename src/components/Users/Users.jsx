import React from "react";
import css from './users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

   return (
      <div>
         <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount} pageSize={pageSize}/>
         <div>
            {
               users.map(u =>
                  <User user={u}
                        key={u.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}/>
               )
            }
         </div>
      </div>
   )
};

export default Users;