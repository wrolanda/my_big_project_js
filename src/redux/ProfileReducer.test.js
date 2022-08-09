import ProfileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer.ts";

//1. test data
let state = {
    postsData: [
        {
            id: 1, message: 'Hello, World!',
            likesCount: '42',
            imgUrl: ''
        },
        {
            id: 2, message: 'It\'s my first post',
            likesCount: '21',
            imgUrl: ''
        },
        {
            id: 3, message: 'mem',
            likesCount: '10',
            imgUrl: 'https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'
        }
    ]
};

test('length of posts should be increment', () => {
    //2. action
    let action = addPostActionCreator("it-kamasutra");
    let newState =  ProfileReducer(state, action);
    //3. expectation
    expect (newState.postsData.length).toBe(4);
});

test('message of new post should be correct', () => {
    //2. action
    let action = addPostActionCreator("it-kamasutra");
    let newState =  ProfileReducer(state, action);
    //3. expectation
    expect (newState.postsData[3].message).toBe("it-kamasutra");
});

test('after deleting length of posts should be decrement', () => {
    //2. action
    let action = deletePost(1);
    let newState =  ProfileReducer(state, action);
    //3. expectation
   expect (newState.postsData.length).toBe(2);
});

test(`after deleting length of posts should't be decrement if id is incorrectS`, () => {
    //2. action
    let action = deletePost(1000);
    let newState =  ProfileReducer(state, action);
    //3. expectation
    expect (newState.postsData.length).toBe(3);
});
