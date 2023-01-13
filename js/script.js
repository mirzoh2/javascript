// Детектор
// let quation = prompt('Сколько реклам вы посмотрели?')

// if (quation == 5) {
//     console.log('Правильно, вот те смотри еще')
// }else if (quation > 5) {
//     console.log('Ээээ Э мы кч любим вас но не настолько')
// }
// else if (quation < 5) {
//     console.log('Не пи*ди в каждой серии у нас по 5 реклам')
// }else {
//     console.log('РЕКЛАМА......')
// }

// Калькулятор
let first_num = +prompt('Введите число')//Первое число
let Function = prompt('Напишите \( - \) что бы отнять Напишите \( + \) что бы пртбавить Напишите \( / \) что бы разделить  Напишите \( * \) что бы умножить')//Действие
let Second_num = +prompt('Введите число')//Второе число

let otv_1 = first_num + Second_num
let otv_2 = first_num - Second_num
let otv_3 = first_num ** Second_num
let otv_4 = first_num / Second_num

let bigotv = [otv_1,otv_2,otv_3,otv_4];
let bigotv_2 = bigotv % 2

// let nechot = +prompt('Введите любое число')
// let nechot_2 = nechot % 2

if(bigotv_2 == 0){
    console.log('Четное');
} else{
    console.log('Нечетное');
}

if (Function == '+') {
    console.log(otv_1)
}else if (Function == '-') {
    console.log(otv_2)
}
else if (Function == '*') {
    console.log(otv_3)
}
else if (Function == '/') {
    console.log(otv_4)
}else {
    console.log('Вы что то ввели не правильно')
}


