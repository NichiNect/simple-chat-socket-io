const sendButton = document.querySelector('#send');
const inputMessage = document.querySelector('#input');
const displayChat = document.querySelector('.container-chat');

const createBubbleChat = (chat) => {
    const newDivMessage = document.createElement('div');
    newDivMessage.classList.add('chat');
    newDivMessage.innerHTML = chat;
    return newDivMessage;
}

sendButton.addEventListener('click', () => {
    const bubbleChat = createBubbleChat(inputMessage.value);
    displayChat.appendChild(bubbleChat);
    inputMessage.value = '';
})