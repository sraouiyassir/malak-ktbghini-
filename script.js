const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const heartsContainer = document.getElementById('hearts-container');

// Array of funny messages for the "No" button
const noMessages = [
  "LA",
  "haaaaaaa?",
  "MNYTK 😑?",
  "XOFI O KAN 😐!",
  "MALAAAAAAAAAAK 🥲!",
  "U SURE?",
  "RAH AN9SDK 😑!",
  "HA XOFI XOFI O KAAAKN🙂",
  "YK YK MHXOMAX 3LIK ?",
  "AHYA XKON HZ LMALAK TELEPHONE",
  "RD RD TELEPHONE L HYATI!",
  "WA GLNA LIK RDO LIHA!",
  "WA RD 5LAAAAS?",
  "WA SRBI MN L3B ?",
  "SRBIIIIII?",
  "RAH ATJI ANGOLHA LIHA 😑",
  "HKK YLH SRBI",
  "DB AN3WD NSWLK",
  "malak ktbghini?",
  "xof lik yk yk tnti...",
  "HXOMA 3LIK 🥲:(",
  "I'm gonna die alone...",
  "SFF AN3WDO"
];

let messageIndex = 0;
let yesBtnSize = 1;

noBtn.addEventListener('click', handleNoClick);
yesBtn.addEventListener('click', handleYesClick);

function handleNoClick() {
  messageIndex = (messageIndex + 1) % noMessages.length;
  const currentMessage = noMessages[messageIndex];
  noBtn.innerText = currentMessage;

  // Enhance the growth of the Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  const newSize = currentSize * 1.2; // 20% growth per click
  yesBtn.style.fontSize = `${newSize}px`;
  
  // Make it clearer by increasing padding too
  const currentPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
  yesBtn.style.padding = `${currentPadding * 1.5}px ${currentPadding * 2}px`;

  // Slightly shrink the No button (text)
  const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
  if (noSize > 5) { // Minimum readable size
    noBtn.style.fontSize = `${noSize * 0.9}px`;
  }
}

function handleYesClick() {
  questionScreen.classList.add('hidden');
  successScreen.classList.remove('hidden');
  
  // Start the celebration
  createHearts();
}

function createHearts() {
  const heartCount = 50;
  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      
      // Random position and animation properties
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.fontSize = Math.random() * 20 + 20 + 'px';
      
      heartsContainer.appendChild(heart);
      
      // Remove heart after animation
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 100);
  }
  
  // Continue creating hearts
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}
