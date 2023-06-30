// background scroll
window.addEventListener('scroll', function() {
    const background = document.getElementById('background');
    const yOffset = window.pageYOffset;
    background.style.backgroundPositionY = -yOffset * 0.5 + 'px';
  });

// need to figure out section scrolling + offset