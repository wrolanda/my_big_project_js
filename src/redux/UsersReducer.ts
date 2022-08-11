import {UserType} from "../types/types";

const { usersAPI } = require('../api/api');
const { updateObjectArray } = require('../utils/object-helpers');

const TOGGLE_FOLLOW = "samurai-network/users/TOGGLE_FOLLOW";
const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USERS = "samurai-network/users/SET_USERS";
const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

type InitialStateType = {
   users: Array<UserType>
   pageSize: number
   totalUsersCount: number
   currentPage: number,
   isFetching: boolean,
   followingInProgress: Array<number> //array of users ids
   toggleFollowingProgress: Array<number>
}

let initialState: InitialStateType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
   toggleFollowingProgress:[],
};

const UsersReducer = (state = initialState, action:any): InitialStateType => {
   switch (action.type) {
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {...u, followed: !u.followed}
               }
               return u;
            })
         };

      case FOLLOW:
         return {
            ...state,
            users: updateObjectArray(state.users,
               action.userId, "id", {followed: true})
         };
      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectArray(state.users,
               action.userId, "id", {followed: false})
         };
      case SET_USERS:
         return {...state, users: action.users};
      case SET_CURRENT_PAGE:
         return {...state, currentPage: action.currentPage};
      case SET_TOTAL_USERS_COUNT:
         return {...state, totalUsersCount: action.count};
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching};
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      }
      default:
         return state;
   }
};

type ToggleFollowActionType = {
   type: typeof TOGGLE_FOLLOW
   userId: number
}
export const toggleFollow = (userId: number): ToggleFollowActionType => ({type: TOGGLE_FOLLOW, userId});

type FollowSuccessActionType = {
   type: typeof FOLLOW
   userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});

type UnfollowSuccessActionType = {
   type: typeof UNFOLLOW
   userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType =>
  ({type: UNFOLLOW, userId});

type SetUsersActionType = {
   type: typeof SET_USERS
   users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType =>
  ({type: SET_USERS, users});

type SetCurrentPageActionType = {
   type: typeof SET_CURRENT_PAGE
   currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType =>
  ({type: SET_CURRENT_PAGE, currentPage: currentPage});

type SetTotalUserCountActionType = {
   type: typeof SET_TOTAL_USERS_COUNT
   count: number
}
export const setTotalUserCount = (totalUsersCount: number): SetTotalUserCountActionType =>
  ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

type ToggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType =>
  ({type: TOGGLE_IS_FETCHING, isFetching});

type ToggleFollowingProgressActionType = {
   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
   isFetching: boolean
   userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType =>
  ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (page: number, pageSize: number) => {
   return async (dispatch: any) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));
      let data = await usersAPI.getUsers(page, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
   }
};

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
   dispatch(toggleFollowingProgress(true, userId));
   let data = await apiMethod(userId);
   if (data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(toggleFollowingProgress(false, userId));
};

export const followThunkCreator = (userId: number) => {
   return async (dispatch: any) => {
      let apiMethod = usersAPI.followAPI.bind(usersAPI);
      let actionCreator = followSuccess;
      await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
   }
};

export const unfollowThunkCreator = (userId: number) => async (dispatch: any) => {
   await followUnfollowFlow(dispatch, userId, usersAPI.unfollowAPI.bind(usersAPI), unfollowSuccess);
};

export default UsersReducer;