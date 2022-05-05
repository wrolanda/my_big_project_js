import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_USER_DATA):
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) =>
  ({type: SET_USER_DATA, payload: {userId, login, email, isAuth} });

export const getAuthUserDataThunkCreator = () => {
  return (dispatch) => {
      authAPI.me().then(data => {
          if (data.resultCode === 0) {
              let {id, login, email} = data.data;
              dispatch(setAuthUserData(id, email, login, true));
          }
      })
  }};

export const login = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
              dispatch( getAuthUserDataThunkCreator())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        })
    };

export const logOut = () => {
    return (dispatch) => {
        authAPI.logOut().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }};

export default AuthReducer;