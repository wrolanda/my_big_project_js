import {profileAPI} from "../api/api";
import {toggleIsFetching} from "./UsersReducer.ts";
import {stopSubmit} from "redux-form";
import {PhotosType, PostsDataType, ProfileType} from "../types/types";

const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "samurai-network/profile/TOGGLE_IS_FETCHING";
const SET_STATUS = "samurai-network/profile/SET_STATUS";
const DELETE_POST = "samurai-network/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "samurai-network/profile/SAVE_PHOTO_SUCCESS";

type InitialStateType = {
  postsData: Array<PostsDataType>
  profile: ProfileType | null
  isFetching: boolean
  status: string
  newPostText: string
}

let initialState: InitialStateType = {
  postsData: [
    {
      id: 1, message: 'Hello, World!',
      likesCount: 42,
      imgUrl: '',
      whoPostName: "NikitaMitryakov",
    },
    {
      id: 2, message: 'It\'s my first post',
      likesCount: 21,
      imgUrl: '',
      whoPostName: "NikitaMitryakov",
    },
    {
      id: 3, message: 'mem',
      likesCount: 10,
      imgUrl: 'https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg',
      whoPostName: "NikitaMitryakov",
    }
  ],
  profile: null as ProfileType | null,
  isFetching: false,
  status: '',
  newPostText: '',
};

const ProfileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Date.now(),
        message: action.newPostBody,
        likesCount: 0,
        imgUrl: '',
        whoPostName: "NikitaMitryakov"
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
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case SET_STATUS:
      return {...state, status: action.status};
    case DELETE_POST:
      return {
        ...state, postsData: state.postsData.filter
        (p => p.id !== action.postId)
      };
    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}};
    default:
      return state;
  }
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostBody: string
}

export const addPostActionCreator = (newPostBody: string):
  AddPostActionCreatorType => ({type: ADD_POST, newPostBody});

type SetUserProfileType = {
   type: typeof SET_USER_PROFILE
   profile: ProfileType
}

export const setUserProfile = (profile: ProfileType):
  SetUserProfileType => ({type: SET_USER_PROFILE, profile});

type SetUserStatusType = {
   type: typeof SET_STATUS
   status: string
}

export const setUserStatus = (status: string):
  SetUserStatusType => ({type: SET_STATUS, status: status});

type DeletePostType = {
   type: typeof DELETE_POST
   postId: number
}

export const deletePost = (postId: number):
  DeletePostType => ({type: DELETE_POST, postId});

type SavePhotoSuccessType = {
   type: typeof SAVE_PHOTO_SUCCESS
   photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType):
  SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfileThunkCreator = (userId: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
  dispatch(toggleIsFetching(false));
};
export const getStatusThunkCreator = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateStatusThunkCreator = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfileThunkCreator(userId));
  } else {
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
};

export default ProfileReducer;