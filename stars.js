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

// Add moon if not already present
if (!document.querySelector('.moon')) {
  const moon = document.createElement('div');
  moon.classList.add('moon');
  document.body.appendChild(moon);
}
