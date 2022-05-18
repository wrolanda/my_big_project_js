import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/auth/GET_CAPTCHA_URL_SUCCESS";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_USER_DATA):
    case (GET_CAPTCHA_URL_SUCCESS):
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) =>
  ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) =>
  ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    let {id, login, email} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUserDataThunkCreator())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", {_error: message}));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logOut = () => {
  return async (dispatch) => {
    let data = await authAPI.logOut();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  }
};



export default AuthReducer;