const numStars = 70;

// Create stars
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  document.body.appendChild(star);
}

// Add moon 
if (!document.querySelector('.moon')) {
  const moon = document.createElement('div');
  moon.classList.add('moon');
  document.body.appendChild(moon);
}

const numClouds = 3;

// Clouds
for (let i = 0; i < numClouds; i++) {
  const cloud = document.createElement('div');
  cloud.classList.add('cloud');
  cloud.style.top = `${Math.random() * 50}vh`;
  cloud.style.left = `${Math.random() * 100}vw`;
  cloud.style.animationDelay = `${Math.random() * 10}s`;
  document.body.appendChild(cloud);
}

// Shooting star
setInterval(() => {
  const shoot = document.createElement('div');
  shoot.classList.add('shooting-star');
  shoot.style.top = `${Math.random() * 50}vh`;
  shoot.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(shoot);

  setTimeout(() => shoot.remove(), 2000);
}, 4000);

document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');

  // Autoplay BG music
  bgMusic.volume = 0.3; 
  bgMusic.play().catch(() => {
    // If autoplay is blocked, show a play button
    const musicBtn = document.createElement('button');
    musicBtn.textContent = '🎵 Play Music';
    musicBtn.classList.add('music-btn');
    document.body.appendChild(musicBtn);

    musicBtn.addEventListener('click', () => {
      bgMusic.play();
      musicBtn.remove();
    });
  });
});
