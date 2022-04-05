const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: []

};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            };

        case (SET_USERS):
            return { ...state, users: [...action.users]};
        default:
            return state;
    }
};

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default UsersReducer;