const container = document.querySelector('#container');                         

const content1 = document.createElement('p');

content1.textContent = "Hey I`m red!";
content1.style.color = 'red';

const content2 = document.createElement('h3');
content2.textContent = "I`m a blue h3!";
content2.style.color = 'blue';

const contain = document.createElement('div');
contain.style.backgroundColor = 'pink';
contain.style.border = 'solid black';

const insideContainer = document.createElement('div');
insideContainer.classList.add('inside')

const content3 = document.createElement('h1');
content3.textContent = "I`m in a div!"
const content4 = document.createElement('p');
content4.textContent = "ME TOO!"

insideContainer.appendChild(content3);
insideContainer.appendChild(content4);
contain.appendChild(insideContainer);

container.appendChild(content1);
container.appendChild(content2);
container.appendChild(contain);

