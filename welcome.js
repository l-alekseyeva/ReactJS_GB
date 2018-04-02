module.exports = function(fullName, className, clickHandler) {
  const p = document.createElement('p');
  p.textContent = fullName;
  document.body.appendChild(p);
  clicker = document.querySelector('p');
  clicker.addEventListener('click', clickHandler);
}
