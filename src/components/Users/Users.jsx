import React from "react";
import css from './users.module.css';
import * as axios from "axios";
import userImg from '../../assets/images/user-default.png'

// {
//     id: 1,
//         imgUrl: 'https://sun9-46.userapi.com/impf/c623900/v623900001/7eaf4/tpjSLbVymS8.jpg?size=806x1080&quality=96&sign=b4b785305f1021be650b5db64518ff7d&type=album',
//     followed: true,
//     fullName: 'Dmitry K.',
//     status: 'i am Dima',
//     location: {city: 'Moscow', country: 'Russia'}
// },

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userImg} className={css.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                unfollow
                            </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>
                                follow
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