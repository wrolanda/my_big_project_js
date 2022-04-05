import React from "react";
import css from './users.module.css';
import * as axios from "axios";
import userImg from '../../assets/images/user-default.png'

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userImg} className={css.userPhoto}/>
                    </div>
                    <div>
                        {<button onClick={() => {
                                this.props.toggleFollow(u.id)
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
    }
}

export default Users;