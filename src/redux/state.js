const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const UpdateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const AddMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export const UpdateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default store;
window.store = store;
