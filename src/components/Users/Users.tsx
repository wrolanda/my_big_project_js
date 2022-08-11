import React from "react";
import Paginator from "../common/Paginator/Paginator";
// @ts-ignore
import User from "./User";
import {UserType} from "../../types/types";
type PropsType = {
  currentPage: number
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  title: string
}

const Users: React.FC<PropsType> = ({ currentPage,
                 totalUsersCount,
                 pageSize,
                 onPageChanged,
                 users,
                 ...props}) => {

   return (
      <div>
        <h2>{props.title}</h2>
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