const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, World!', likesCount: '42'},
        {id: 2, message: 'It\'s my first post', likesCount: '21'},
        //{id: 3, mem: {<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}, likesCount: '10'}
    ],
    newPostText: ''
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case (ADD_POST): {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            if (newPost.message !== "") {
                stateCopy.postData = [...state.postsData];
                stateCopy.postsData.push(newPost);
            }
                stateCopy.newPostText = '';
                return stateCopy;
        }
        case (UPDATE_NEW_POST_TEXT): {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default ProfileReducer;