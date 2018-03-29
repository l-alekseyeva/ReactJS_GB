module.exports = function(fullName, className) {
  let p = document.createElement('p');
  p.textContent = fullName;
  document.body.appendChild(p);
  clicker = document.querySelector('p');
  clicker.addEventListener('click', function(event) {
    if (!p.className){
      p.className = className;
    } else {
      p.classList.remove(className);
    }
  });
}
