// More destinations functionality
document.addEventListener('DOMContentLoaded', function() {
  const moreBtn = document.getElementById('more-destinations-btn');
  const hiddenDestinations = document.querySelectorAll('.hidden-destination');
  let destinationsVisible = false;
  
  moreBtn.addEventListener('click', function() {
    if (!destinationsVisible) {
      // Show hidden destinations
      hiddenDestinations.forEach(destination => {
        destination.style.display = 'block';
        destination.classList.add('fade-in');
      });
      moreBtn.textContent = 'Show less';
      destinationsVisible = true;
    } else {
      // Hide destinations
      hiddenDestinations.forEach(destination => {
        destination.style.display = 'none';
        destination.classList.remove('fade-in');
      });
      moreBtn.textContent = 'More destination';
      destinationsVisible = false;
    }
  });
});