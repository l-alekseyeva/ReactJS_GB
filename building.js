
let welcome = require('./welcome');
welcome(name = 'Алексеева Любовь', className = 'fullName', function(event) {
  const p = document.querySelector('p');
  const moment =  require('moment');
  moment.locale('ru');
  const date = moment().format('LL');
  if (!p.className){
    p.className = className;
    p.textContent = `${name} ${date}`;
  } else {
    p.classList.remove(className);
    p.textContent = name;
  }
});

module.exports = {
  welcome
}
