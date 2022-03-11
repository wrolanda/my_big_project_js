let state = {
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
        ]
    },
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello, World!', likesCount: '42'},
            {id: 2, message: 'It\'s my first post', likesCount: '21'},
            //{id: 3, mem: {<img src='https://cs14.pikabu.ru/post_img/big/2021/06/28/10/1624898051168416526.jpg'></img>}, likesCount: '10'}
        ]
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
}

export default state;

