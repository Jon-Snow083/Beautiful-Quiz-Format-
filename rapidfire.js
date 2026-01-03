document.querySelectorAll('.option-btn').forEach((button, index) => {
        
    if (localStorage.getItem(`buttonVisited${index}`)) {
      button.classList.add('visited');
    }
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
      button.classList.add('visited'); 
      localStorage.setItem(`buttonVisited${index}`, 'true'); 
    });
  });
  