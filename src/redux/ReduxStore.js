import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;