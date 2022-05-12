// Конструкция if/else
// const myVAr1 = 10;
// const myVar2 = 10;

// if (myVAr1>myVar2) {
//     console.log(`${myVAr1} больше ${myVar2}`);
// } else if (myVAr1 < myVar2){
//     console.log (`${myVAr1} меньше ${myVar2}`);
// } else {
//     console.log("end")
// }

// Улсовный оператор "?" - используется при одинарном сравнении. Чтобы не нагружать код.

// const myVAr1 = 10;
// const myVar2 = 10;

// if (myVAr1>myVar2) {
//     console.log(`${myVAr1} больше ${myVar2}`);
// } else {
//     console.log("end")
// }
// let result = myVAr1 > myVar2 ? console.log(true) :console.log(false);

// конструция "swith"

// const userRole = "normal_user";

// switch(userRole) {
//     case 'student':
//         console.log('Текущий пользователь - student');
//         break;
//     case 'admin':
//         console.log("Текущий пользователь - admin")
//         break;
//     case 'normal_user':
//         console.log('Текущий пользователь - normal_user');
//         break;
//         default:
//             console.log('Нет такого типа пользователя');
//             break;
// }

// Логические операторы

// && - логическое И - возвращает первое значение FALSE
// || - логическое ИЛИ - возвращает первое значение TRUE
// ! - логическое НЕ

// console.log(1 || 0 || "");
// console.log(1 && 2 && 'строка' && 0 && 1);

// console.log(1 && 2) || (4 && 0);

// Что делает JS пошагово:
// if (1 && 0) {
//     console.log(result);
// }
// 1. Находит ключевое слово if, понимает, что дальше условие
// 2. Внутри условия находит логичесоке И - &&.
// 3. Оператор приводит значение к булевому типу - true/false (ВАЖНО: делает это 'под капотом')
// 4. 1 -> true, 0 -> false, && возвращают значение, которое яляется false при привелдении в булев тип
// 5. В данном случвк мы получаем 0, который приводиться в булев тип блоком if.

// Логическое НЕ
// 1. JS приводит значение после ! к булевому типу
// 2. ! меняет полученный тип на противоположный

// const myVar = 5;
// if (!!myVar) {
//     console.log("TRUE")
// }

// const myVar = !5;
// console.log(myVar)

// ПРАКТИКА

// console.log(null || 0 || "" || undefined) - т.к. последнее из значений false
// console.log("яблоко" && true && null && 1) - null, т.к. до первого false.

