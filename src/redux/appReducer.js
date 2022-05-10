import {getAuthUserDataThunkCreator} from "./authReducer";

const INITIALIZED_SUCCESS = "samurai-network/app/INITIALIZED_SUCCESS";


let initialState = {
    initialized: false,
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case (INITIALIZED_SUCCESS):
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
        let promise = dispatch(getAuthUserDataThunkCreator());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
  };

export default AppReducer;