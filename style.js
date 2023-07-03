

window.addEventListener('DOMContentLoaded', function() {
    var popup = document.querySelector('.popup');
    var closeButton = document.querySelector('.close-btn');
    var okButton = document.querySelector('.ok-btn');
  
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    okButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    popup.style.display = 'flex';
  });
  