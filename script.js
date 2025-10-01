const texts = [
  "Welcome to my portfolio.",
  "Cybersecurity Enthusiast",
  "Building cool things with code."
];
const colors = ["#66ff66"];

let phraseIndex = 0;
let letterIndex = 0;
let typing = true;
const typedTextSpan = document.getElementById('typed-text');
const cursorSpan = document.querySelector('.cursor');

function type() {
  const currentText = texts[phraseIndex];

  if (letterIndex === 0 && typing) {
    typedTextSpan.style.color = colors[phraseIndex % colors.length];
    cursorSpan.style.backgroundColor = colors[phraseIndex % colors.length];
  }

  if (typing) {
    typedTextSpan.textContent = currentText.slice(0, ++letterIndex);
    if (letterIndex === currentText.length) {
      typing = false;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 100);
    }
  } else {
    typedTextSpan.textContent = currentText.slice(0, --letterIndex);
    if (letterIndex === 0) {
      typing = true;
      phraseIndex = (phraseIndex + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  }
}

// particles background
tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
    links: {
      enable: true,
      distance: 150,
      color: "#00ff00",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  },
  retina_detect: true
});


document.addEventListener('DOMContentLoaded', type);
