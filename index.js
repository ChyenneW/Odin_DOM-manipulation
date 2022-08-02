const content = document.querySelector('.content');

const redP = document.createElement('p');
redP.textContent = 'Hey, I am red!';
redP.setAttribute('style', 'color:red;');

content.appendChild(redP);