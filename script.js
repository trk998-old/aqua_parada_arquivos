
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseover', () => {
    const audio = document.getElementById('hoverSound');
    audio.currentTime = 0;
    audio.play();
  });
});
