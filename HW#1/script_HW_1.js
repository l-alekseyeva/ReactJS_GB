// Задание №1

const loop = (times = 0, callback = null) => {
  if (typeof callback == 'function') {
    for (let i = 1; i <= times; i++) {
      callback(i);
    }
  } else {
    return false;
  }
};

loop(3, function(i) {
  console.log('Вывели функцию ' + i + '.')
});

loop(4);

// Задание №2

let calculateArea = (width, heigth) => {
  let figure_name = 'square';

  if (width !== heigth) {
    figure_name = 'rectangle';
  }

  let fig = {
    area: width * heigth,
    figure: figure_name,
    input: {width, heigth}
  };

  return fig;
}

console.log(calculateArea(3, 3));
console.log(calculateArea(5, 4));

// Задание №3

class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }
  displayInfo() {
    return `Name: ${this.name}. Age: ${this.age}. Date of birth: ${this.dateOfBirth}.`;
  }
};

class Employee extends Human{
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }
  displayInfo() {
    return `${super.displayInfo()} Salary: ${this.salary}. Department: ${this.department}.`;
  }
}

class Manager extends Employee {
  constructor (name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
    this.devArray = [];
  };

  get allDevelopers() {
    return this.devArray;
  };

  addDeveloper(developer) {
    this.devArray.push(developer);
  };

  removeDeveloper(developer) {
    this.devArray = this.devArray.filter(e => e !== developer);
  }
};

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department, manager) {
    super(name, age, dateOfBirth, salary, department);
    this.manager = manager;
    this.manager.addDeveloper(this);
  }

  changeManagerTo(manager) {
    this.manager.removeDeveloper(this);
    this.manager = manager;
    this.manager.addDeveloper(this);
  }
};

const manager1 = new Manager ('Вася', '18', '15.12.99', '123', 'Project Manager');
const manager2 = new Manager ('Автанзил','70','01.01.48','47','R&D Junior Vice-President');

const developer1 = new Developer ('Акакий', '18', '15.11.99', '321', 'Middle', manager1);
const developer2 = new Developer ('Петя', '21', '15.11.95', '456', 'Junior', manager2);

console.log(manager1.allDevelopers);

// Задание №4

function* quiz() {
  const questionnaire = {
    name: 'Как вас зовут?',
    age: 'Сколько вам лет?',
    city: 'Откуда вы?'
  };
  for (key in questionnaire) {
    questionnaire[key] = yield questionnaire[key];
  }
  return questionnaire;
}

let generator = quiz();
let answer = null;

while( !(question = generator.next(answer)).done ){
  answer = prompt(question.value);
}
console.log(question.value);

// Задание №5

Promise.all(Array(10).fill(0).map((i) => fetch(`https://jsonplaceholder.typicode.com/users/${i + 1}`).then((response) => response.json()))).then(users => {
  console.log(users);
});

// Ваш вариант

Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => fetch(`https://jsonplaceholder.typicode.com/users/${i}`).then((response) => response.json()))).then(users => {
  console.log(users);
})
