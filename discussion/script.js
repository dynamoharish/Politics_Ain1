const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const messagesDiv = document.querySelector('#messages');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value;

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.innerHTML = `
    <h2>${name}</h2>
    <p>${message}</p>
  `;

  messagesDiv.appendChild(messageDiv);

  nameInput.value = '';
  messageInput.value = '';
});
