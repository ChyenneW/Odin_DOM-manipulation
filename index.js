const content = document.querySelector('.content');

const redP = document.createElement('p');
redP.textContent = 'Hey, I am red!';
redP.setAttribute('style', 'color:red;');

const blueH = document.createElement('h3');
blueH.textContent = 'Hey, I am a blue H3!';
blueH.setAttribute('style', 'color:blue;');

const blackDiv = document.createElement('div');
blackDiv.setAttribute('style', 'border:1px solid black; background-color:pink;');

content.appendChild(redP);
content.appendChild(blueH);
content.appendChild(blackDiv);