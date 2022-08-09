import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/auth/GET_CAPTCHA_URL_SUCCESS";

type InitialStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};

const AuthReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

type SetAuthUserDataPayloadType = {
  userId: number
  login: string
  email: string
  isAuth: boolean,
}

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean): SetAuthUserDataType =>
  ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
  });

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl: string },
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType =>
  ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    let {id, login, email} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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