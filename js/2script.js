 //Lesson 9;

 /* let incr = 10,
     decr = 10;

     incr++;  // prefix
     decr--;  //postfix
     console.log(incr);
     console.log(decr); */

     //|| //или или правда одна
     //&& //и или и два и более правдивы
     //const aaa = confirm=("Are you here?");   // ответ да или нет
     //const aaa = prompt("answer", ""); //action requiring a response (действие требующее ответа);

                     //Условия.
/* const num = 50;
if (num < 49) {
    console.log("error");
} else if (num > 100) {
    colsole.log('much');
} else {
    console.log('Ok');
}

(num == 50) ? console.log('Ok') : console.log("error"); тернарный оператор */
                     //Method Switch.
/* const num = 50;

switch (num) {
    case 49 :
        console.log('No');
        break;
    case 100 :
        console.log('wrong');
        break;
    case 50 :
        console.log('Yes');
        break;
    default:
        console.log('not this time');
        break; 
} */
                   //Cycle.

/* let num = 50;

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num <55); */

/* for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;          пропустит 6
    }
    console.log(i);
} */
                 //Function.
                 //function declaration. создается до начала выполнения.
/* function calc(a, b) {
    return (a + b);
}
console.log(calc (4, 5));
console.log(calc (5, 6));
console.log(calc (4, 10));

function ret() {
    let num = 50;
    return num;
}
                       //function expression. создается после объявления.
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};
logger(); */
                      // стрелочная функция.
/* const calc = (a, b) => {
    console.log('1');
    return a + b;
}; */
/* const options = { Перебор объектов.
    name: 'test',
    width: 1024,
    height:
    1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
const {border, bg} = options.colors;      деструктуризация объектов. 
// console.log(Object.keys(options).length);
//console.log(options.name);

//delete options.name; //удаление свойства объекта.
   let counter = 0;
for (let key in options) {   //перебор свойств объекта.
    if (typeof (options[key]) === 'object') {
       for (let i in options[key]) {
        console.log(`Свойство ${i} Имеет зачение ${options [key] [i]}`);
        counter++;
    }

    }else {
        console.log(`Свойство ${key} Имеет зачение ${options [key]}`);
        counter++;
    }
}
console.log(counter); */
                   //Массивы.
 /* const arr = [1, 2, 3, 6, 8];
 arr.sort(compareNum);
 console.log(arr);

 function compareNum(a, b) {         //сортировка чисел.
     return a - b;
 } */
 /* arr[99] = 0;
 console.log(arr.length);
 console.log(arr); */

 /* arr.forEach(function(item, i, arr) {              // Перебор массива forEach метод.
     console.log(`${i}: ${item} внутри массива ${arr}`);
 });
 arr.pop();  //убирает последнюю цифру
 arr.push(10); //добавляет цифру в конец
 
 console.log(arr);

 for (let i = 0; i < arr.length; i++) {      // Перебор
     console.log(arr[i]);
 }                                              //элементов
 for (let value of arr) {
     console.log(value);                        // Массива
 }
 */
 /* const str = prompt("","");
 const products = str.split(", ");
 products.sort();                    //сортировка в строках
 console.log(products.join('; '));

                 //Передача по ссылке.
 const obj = {
 a: 5,
 b: 1
}; */

 /* const copy = obj;  //ссылку
 copy.a = 10;

 console.log(copy);
 console.log(obj); */

/* function copy(mainObj) {
let objCopy = {};

let key;
for (key in mainObj) {
    objCopy[key] = mainObj[key];
}
return objCopy;
}

const numbers = {
a: 2,
b: 5,
c: {
    x: 7,
    y: 4
   }
};
const newNumbers = copy(numbers);  //поверхносное клонирование объекта кроме вложеных 

newNumbers.a = 10;
newNumbers.c.x = 10;                     // передача по ссылке. вложеный объект.

console.log(newNumbers);
console.log(numbers);

const add =  {                           //объединение объектов
d:17,
e:20
};

console.log(Object.assign(numbers, add));
console.log(Object.assign({}, add));       //создание поверхностного клона

const oldArray = ['a', 'b', 'c'];          //поверхностная копия массива
const newArray = oldArray.slice();

newArray[1] ='abba';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],      //spread оператор разворота
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      console.log(internet);

function log(a, b, c) {                // второй пример
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];            //третий пример

const newAarray = [...array];

const g = {                         // четвертый
    one: 1,
    two: 2
};

const newObj = {...g};
                // Динамическая типизация.

  //To String
  //1)
  console.log(typeof(String(null))) ;  
  console.log(typeof(String(4))) ;   */  
  
  //2) Конкатенация.
  /* console.log(typeof(5 + '')) ;

  const num = 5;
  console.log("https://vk.com/catalog/" + num);   // результат строка

  const fontSize = 26 + 'px';

  //To Number
  //1)
  console.log(typeof(Number('4'))) ;
  //2)
  console.log(typeof(+ '5')) ;
  
  //3)
  console.log(typeof(parseInt("15px", 10))) ;

  let answ = +prompt('Hello', '');

  //To boolean

  //0, '', null, undefined, NaN;  всегда false.
//1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}
//2)
console.log(typeof(Boolean('4'))) ;

//3)
console.log(typeof(!!'4444')) ; */