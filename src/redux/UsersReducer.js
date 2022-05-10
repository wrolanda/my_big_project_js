import {usersAPI} from "../api/api";
import {updateObjectArray} from "../utils/object-helpers";

const TOGGLE_FOLLOW = "samurai-network/users/TOGGLE_FOLLOW";
const FOLLOW = "samurai-network/users/FOLLOW";
const UNFOLLOW = "samurai-network/users/UNFOLLOW";
const SET_USERS = "samurai-network/users/SET_USERS";
const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
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

      case (FOLLOW):
         return {
            ...state,
            users: updateObjectArray(state.users,
               action.userId, "id", {followed: true})
         };
      case (UNFOLLOW):
         return {
            ...state,
            users: updateObjectArray(state.users,
               action.userId, "id", {followed: false})
         };
      case (SET_USERS):
         return {...state, users: action.users};
      case (SET_CURRENT_PAGE):
         return {...state, currentPage: action.currentPage};
      case (SET_TOTAL_USERS_COUNT):
         return {...state, totalUsersCount: action.count};
      case (TOGGLE_IS_FETCHING):
         return {...state, isFetching: action.isFetching};
      case (TOGGLE_IS_FOLLOWING_PROGRESS): {
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

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId});

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUserCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
   type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (page, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));
      let data = await usersAPI.getUsers(page, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
   }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleFollowingProgress(true, userId));
   let data = await apiMethod(userId);
   if (data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(toggleFollowingProgress(false, userId));
};

export const followThunkCreator = (userId) => {
   return async (dispatch) => {
      let apiMethod = usersAPI.followAPI.bind(usersAPI);
      let actionCreator = followSuccess;
      await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
   }
};

export const unfollowThunkCreator = (userId) => async (dispatch) => {
   await followUnfollowFlow(dispatch, userId, usersAPI.unfollowAPI.bind(usersAPI), unfollowSuccess);
};

export default UsersReducer;