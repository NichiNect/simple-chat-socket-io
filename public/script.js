const sendButton = document.querySelector('#send');
const inputMessage = document.querySelector('#input');
const displayChat = document.querySelector('.container-chat');

const socketIO = io();
socketIO.on('connect', () => {
    console.log('client socket connected!');
});

const createBubbleChat = (chat) => {
    const newDivMessage = document.createElement('div');
    newDivMessage.classList.add('chat');
    newDivMessage.innerHTML = chat;
    return newDivMessage;
}

sendButton.addEventListener('click', () => {
    const bubbleChat = createBubbleChat(inputMessage.value);
    displayChat.appendChild(bubbleChat);

    // * Send socket event with `send-message` key
    socketIO.emit('send-message', input.value);

    inputMessage.value = '';
});

// * listen/subscribe the socket event by `new-message` key
socketIO.on('new-message', (data) => {
    const bubbleChat = createBubbleChat(data);
    bubbleChat.classList.add('chat-right');
    displayChat.appendChild(bubbleChat);
});