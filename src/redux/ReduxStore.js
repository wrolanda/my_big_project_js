import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    sidebar: SidebarReducer
});

let store = createStore(reducers);

export default store;