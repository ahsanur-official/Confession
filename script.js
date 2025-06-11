// Get DOM elements
const introText = document.getElementById('introText');
const startBtn = document.getElementById('startBtn');
const loveMessages = document.querySelectorAll('#loveMessages p');
const loveMessagesContainer = document.getElementById('loveMessages');
const decisionButtons = document.getElementById('decisionButtons');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');
const closeBtn = document.querySelector('.close-btn');
const bgMusic = document.getElementById('bgMusic');

// Floating containers
const floatingContainers = [
  document.getElementById('floatingShapes1'),
  document.getElementById('floatingShapes2'),
  document.getElementById('floatingShapes3'),
  document.getElementById('floatingShapes4'),
  document.getElementById('floatingShapes5'),
];

// Shape types
const shapes = ['heart', 'star', 'flower', 'balloon', 'leaf', 'love'];

let messageIndex = 0;

// Play muted background music on page load
window.addEventListener('load', () => {
  bgMusic.play().catch(() => {
    // Browser blocked autoplay - wait for interaction
  });
});

// Unmute and play music on first user click
document.body.addEventListener('click', () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    bgMusic.play();
  }
}, { once: true });

// Start button click
startBtn.addEventListener('click', () => {
  introText.style.animation = 'fadeOutUp 0.6s forwards';
  startBtn.style.animation = 'fadeOutUp 0.6s forwards';

  // Ensure music plays
  if (bgMusic.muted) {
    bgMusic.muted = false;
    bgMusic.play();
  }

  // After animation, start showing messages
  setTimeout(() => {
    introText.style.display = 'none';
    startBtn.style.display = 'none';
    loveMessagesContainer.style.display = 'block';
    showNextMessage();
  }, 600);
});

// Show love messages one by one
function showNextMessage() {
  if (messageIndex < loveMessages.length) {
    const msg = loveMessages[messageIndex];
    msg.style.animation = 'fadeInSlideLeft 0.8s ease forwards';
    msg.style.opacity = '1';
    messageIndex++;
    setTimeout(showNextMessage, 1500);
  } else {
    decisionButtons.style.display = 'block';
    setTimeout(() => {
      decisionButtons.style.opacity = '1';
    }, 50);
  }
}

// Show popup with animated entry
function showDecisionPopup(type) {
  if (type === "accept") {
    popupTitle.innerText = "Yaaay! 💖";
    popupMessage.innerText =
      "You just made my heart so happy! I promise to cherish you forever. 💕\n\n" +
      "From now on, you're my everything. I’ll hold your hand through every moment – laughter, tears, and everything in between. 🌈💑\n\n" +
      "You made my dreams come true, and I can't wait to make yours come true too. 💌\n\n" +
      "Let's build our dreams together and grow stronger each day. ❤️";
  } else {
    popupTitle.innerText = "That's Okay 😊";
    popupMessage.innerText =
      "I respect your feelings and wish you all the love and happiness in life. 🌸\n\n" +
      "Even if we're not together, your smile matters to me. May your journey ahead be full of warmth, peace, and self-love. 🌟\n\n" +
      "Thank you for reading this. You're special. 🌷\n\n" +
      "You deserve all the beautiful things in life. Keep shining. 🌼";
  }

  popup.style.display = 'block';
  requestAnimationFrame(() => popup.classList.add("active"));
}

// Close popup with animated exit
function closePopup() {
  popup.classList.remove("active");
  popup.addEventListener('transitionend', function handler(e) {
    if (e.propertyName === 'opacity') {
      popup.style.display = 'none';
      popup.removeEventListener('transitionend', handler);
    }
  });
}

// Event listener for close button
closeBtn.addEventListener('click', closePopup);

// Floating shape animation
function createFloatingShape() {
  const shape = document.createElement('div');
  const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
  shape.classList.add('shape', shapeType);

  shape.style.left = Math.random() * 100 + '%';
  shape.style.animationDuration = 3 + Math.random() * 3 + 's';

  const container = floatingContainers[Math.floor(Math.random() * floatingContainers.length)];
  container.appendChild(shape);

  setTimeout(() => shape.remove(), 6000);
}

// Generate shapes every 500ms
setInterval(createFloatingShape, 500);
