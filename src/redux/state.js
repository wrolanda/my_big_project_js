import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Alexey'},
                {id: 3, name: 'Katya'},
                {id: 4, name: 'Nastya'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Kirill'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'}
            ],
            newMessageText: ''
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello, World!', likesCount: '42'},
                {id: 2, message: 'It\'s my first post', likesCount: '21'},
                //{id: 3, mem: {<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}, likesCount: '10'}
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // ({type: "ADD-POST"})
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
