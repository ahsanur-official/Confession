const introText = document.getElementById('introText');
const startBtn = document.getElementById('startBtn');
const loveMessages = document.querySelectorAll('#loveMessages p');
const loveMessagesContainer = document.getElementById('loveMessages');
const decisionButtons = document.getElementById('decisionButtons');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');

let messageIndex = 0;

startBtn.addEventListener('click', () => {
  // Animate intro text and button out
  introText.style.animation = 'fadeOutUp 0.6s forwards';
  startBtn.style.animation = 'fadeOutUp 0.6s forwards';

  // After animation ends, hide them and show love messages container
  setTimeout(() => {
    introText.style.display = 'none';
    startBtn.style.display = 'none';

    loveMessagesContainer.style.display = 'block';
    showNextMessage();
  }, 600);
});

function showNextMessage() {
  if (messageIndex < loveMessages.length) {
    const msg = loveMessages[messageIndex];
    msg.style.animation = 'fadeInSlideLeft 0.8s ease forwards';
    msg.style.opacity = '1';

    messageIndex++;
    setTimeout(showNextMessage, 1500);
  } else {
    // Show decision buttons with fade-in
    decisionButtons.style.display = 'block';
    setTimeout(() => {
      decisionButtons.style.opacity = '1';
    }, 50);
  }
}

function showDecisionPopup(type) {
  if (type === "accept") {
    popupTitle.innerText = "Yaaay! 💖";
    popupMessage.innerText = "You just made my heart so happy! I promise to cherish you forever. 💕";
  } else {
    popupTitle.innerText = "That's Okay 😊";
    popupMessage.innerText = "I respect your feelings and wish you all the love and happiness in life. 🌸";
  }

  popup.classList.add("active");
  popup.style.animation = 'fadeInScale 0.4s ease forwards';
}

function closePopup() {
  popup.classList.remove("active");
}
