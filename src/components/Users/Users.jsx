import React from "react";
import css from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                imgUrl: 'https://sun9-46.userapi.com/impf/c623900/v623900001/7eaf4/tpjSLbVymS8.jpg?size=806x1080&quality=96&sign=b4b785305f1021be650b5db64518ff7d&type=album',
                followed: true,
                fullName: 'Dmitry K.',
                status: 'i am Dima',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                imgUrl: 'https://sun9-46.userapi.com/impf/c623900/v623900001/7eaf4/tpjSLbVymS8.jpg?size=806x1080&quality=96&sign=b4b785305f1021be650b5db64518ff7d&type=album',
                followed: true,
                fullName: 'Dmitry K.',
                status: 'i am Dima',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                imgUrl: 'https://sun9-46.userapi.com/impf/c623900/v623900001/7eaf4/tpjSLbVymS8.jpg?size=806x1080&quality=96&sign=b4b785305f1021be650b5db64518ff7d&type=album',
                followed: true,
                fullName: 'Dmitry K.',
                status: 'i am Dima',
                location: {city: 'Moscow', country: 'Russia'}
            },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img src={u.imgUrl} className={css.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>
                                unfollow
                        </button>
                            : <button onClick={() => {props.follow(u.id)}}>
                                follow
                            </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                       <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                    </div>)
            }
        </div>
    )
};

export default Users;