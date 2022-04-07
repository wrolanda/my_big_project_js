import React from "react";
import css from './users.module.css';
import userImg from '../../assets/images/user-default.png'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && css.selectedPage}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>)
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userImg} className={css.userPhoto}/>
                    </div>
                    <div>
                        {<button onClick={() => {
                            props.toggleFollow(u.id)
                        }}>
                            {u.followed
                                ? "unfollow"
                                : "follow"
                            }
                        </button>
                        }
                    </div>
                </span>
                        <span>
                    <span>
                       <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                    </div>)
            }
        </div>
    )
};

export default Users;