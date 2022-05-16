import {profileAPI} from "../api/api";
import {toggleIsFetching} from "./UsersReducer";

const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "samurai-network/profile/TOGGLE_IS_FETCHING";
const SET_STATUS = "samurai-network/profile/SET_STATUS";
const DELETE_POST = "samurai-network/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "samurai-network/profile/SAVE_PHOTO_SUCCESS";

let initialState = {
   postsData: [
      {
         id: 1, message: 'Hello, World!',
         likesCount: '42',
         imgUrl: ''
      },
      {
         id: 2, message: 'It\'s my first post',
         likesCount: '21',
         imgUrl: ''
      },
      {
         id: 3, message: 'mem',
         likesCount: '10',
         imgUrl: 'https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'
      }
   ],
   profile: null,
   isFetching: false,
   status: "",
};

const ProfileReducer = (state = initialState, action) => {
   switch (action.type) {
      case (ADD_POST): {
         let newPost = {
            id: 5,
            message: action.newPostBody,
            likesCount: 0,
            imgUrl: ''
         };
         if (newPost.message !== "") {  //don't work
            return {
               ...state,
               postsData: [...state.postsData, newPost],
               newPostText: ''
            }
         } else
            return state;
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }
      case (TOGGLE_IS_FETCHING):
         return {...state, isFetching: action.isFetching};
      case (SET_STATUS):
         return {...state, status: action.status};
      case (DELETE_POST):
         return {...state, postsData: state.postsData.filter
            (p => p.id !== action.postId)};
      case (SAVE_PHOTO_SUCCESS):
         return {...state, profile: {...state.profile,  photos: action.photos}};
      default:
         return state;
   }
};

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status: status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   let response = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(response.data));
   dispatch(toggleIsFetching(false));
};
export const getStatusThunkCreator = (userId) => async (dispatch) => {
   let response = await profileAPI.getUserStatus(userId);
   dispatch(setUserStatus(response.data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
   }
};

export const savePhoto = (file) => async (dispatch) => {
   let response = await profileAPI.savePhoto(file);
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
};

export default ProfileReducer;