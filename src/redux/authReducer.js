import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    id: null,
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


export const setAuthUserData = (id, email, login, isAuth) =>
  ({type: SET_USER_DATA, payload: {id, login, email, isAuth} });

export const getAuthUserDataThunkCreator = () => {
  return (dispatch) => {
      authAPI.me().then(data => {
          if (data.resultCode === 0) {
              let {id, login, email} = data.data;
              dispatch(setAuthUserData(id, email, login, true));
          }
      })
  }};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
              dispatch( getAuthUserDataThunkCreator())
            }
        })
    }};

export const logOut = () => {
    return (dispatch) => {
        authAPI.logOut().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }};

export default AuthReducer;