import {usersAPI} from "../api/api";
import {toggleIsFetching} from "./UsersReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, World!',
                likesCount: '42',
                imgUrl: ''},
        {id: 2, message: 'It\'s my first post',
                likesCount: '21',
                imgUrl: ''},
        {id: 3, message: 'mem',
                likesCount: '10',
                imgUrl: 'https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'}
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST): {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                imgUrl: ''
            };
            if (newPost.message !== '') {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                }
            }
            else
                return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case (TOGGLE_IS_FETCHING):
            return { ...state, isFetching: action.isFetching};
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        if (!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
            dispatch(toggleIsFetching(false));
        });
    }
};

export default ProfileReducer;