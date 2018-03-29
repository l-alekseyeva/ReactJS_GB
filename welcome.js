module.exports = function(fullName, className) {
  let p = document.createElement('p');
  p.textContent = fullName;
  document.body.appendChild(p);
  clicker = document.querySelector('p');
  clicker.addEventListener('click', function(event) {
    if (!p.className){
      p.className = className;
      let moment =  require('moment');
      moment.locale('ru');
      let date = moment().format('LL');
      p.textContent = `${fullName} ${date}`;
    } else {
      p.classList.remove(className);
      p.textContent = fullName;
    }
  });
}
