import {getAuthUserDataThunkCreator} from "./authReducer.ts";

const INITIALIZED_SUCCESS = "samurai-network/app/INITIALIZED_SUCCESS";

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
};

const AppReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():InitializedSuccessActionType  =>
  ({type:  INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
        let promise = dispatch(getAuthUserDataThunkCreator());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
  };

export default AppReducer;