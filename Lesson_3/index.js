// // //примитивные типы данных

// // //Number
// // // console.log(1/0) 
// // // console.log(typeof NaN)
// // // оператор typeof показывает тип данных, указанный после typeof
// // //String
// // // const myString = 'строка'
// // //  const anotherString = "текст: \"текст\" текст"; // это экранирование, когда нужно вставить два вида кавычек

// // // const templateString = `шаблонная строка ${anotherString}`
// // // console.log(templateString)
// // // console.log(myString)


// // // //Boolean
// // // const isAdmin = true;
// // // const isUser = false;

// // // //Null
// // // const emptyVariable = null;

// // // //undefined
// // // const userNamme;
// // // console.log(userNamme)

// // //непримитивные типы данных
// // //Object - объект

// // const user = {
// //     name:'Vasya',
// //     lastName: 'Ivanov',
// //     age: 23,
// //     citixenship: "Russian",
// //     // newObject: {
// //     //     newProperty: 'property'
// //     }


// // // console.log(user.name) вызовет имя вложенное в функцию пользователь
// // // console.log(user.newObject.newProperty) можно делать и так. Вызвать из вложенного вложенного

// // // но приавильнее делать через введение новой переменной.
// // const userNamme = user.name;

// // // console.log(userNamme);

// // // оператор typeof

// // console.log(typeof someName)

// // // Оператор typeof

// // // // typeof null - всегда объект! Это ошибка JS.


// // // ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ
// // // Строковое преобразование

// // // const myVar = 123

// // // const myVarToString = String(myVar);
// // // console.log(typeof myVarToString)

// // const myVar = true;

// // const myVarToString = String(myVar);
// // // console.log(myVarToString) - выведет true, но не как Boolean, а как строку.


// // //Численное преобразование
// // const myVAr = '123'

// // const myVarToNumber = Number(myVAr); //можно записать и так: = +myVar;
// // console.log(typeof myVarToNumber)


// const myVAr = 'afsf123'

// const myVarToNumber = +myVAr;
// console.log(typeof myVarToNumber) // выдает NaNб но тип Nan - число. Смирись.


//Логическое преобрвазование

// const myVar = 1;
// console.log(Boolean(myVar)); // можно записать и как: console.log(!!myVar);  !! = Boolean. ! = частице "не"

// const myVar = "0";
// console.log(!!myVar); //true

// Математические операторы

// const myNumber = 1;
// const newNumber = 2;
// const myString = "строка";

// console.log(myNumber + myString)

// //Сравнение строк

// const string1 = "строка"
// const string2 = "солнце"

// console.log(string1 == string2)

// //unicode - почитать

// const userTypes = {
//     asdmin: "admin",
//     user: "user",
//     teacher: "teacher",
//     contentManager: "contentManager",
// };

// const serverDataUserType = "user"

// if (serverDataUserType === userTypes.asdmin) {
//     console.log("показать весь контент")
// } else {
//     console.log("показать ограниченный контент")
// }

console.log("2">"12") // true
console.log(undefined == null) // true
console.log(undefined === null) // true
console.log(null == "\n0\n") // true
console.log(null === +"\n0\n") 
console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log()
console.log(6 / "3")
console.log("2" * "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2)
console.log("4px" - 2)
console.log(7 / 0)
console.log("  -9  " + 5)
console.log("  -9  " - 5)
console.log(null + 1)
console.log(undefined + 1)
console.log(" \t \n" - 2)

