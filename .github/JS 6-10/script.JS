 //1 практическая по JS
// function hello(name, age) {
//       console.log(`Тип переменной name: ${typeof name}`);
//     console.log(`Тип переменной age: ${typeof age}`);
    
//     return `Привет, ${name}! Твой возраст: ${age}`;
// }


// console.log(hello("Йоруичи", 200));
// console.log(hello("Мисато", 29));
// console.log(hello("Фрирен", 1000));



// //2 практическая по JS
// // 1 Задание
// const bookPrice = 599.99;     
// const deliveryCost = 250;     
// const bookCount = 3;          

// const totalCost = (bookPrice * bookCount + deliveryCost).toFixed(2);
// const resultType = typeof totalCost;

// console.log('=== Расчет стоимости корзины ===');
// console.log(`Количество книг: ${bookCount} шт.`);
// console.log(`Цена одной книги: ${bookPrice} ₽`);
// console.log(`Стоимость доставки: ${deliveryCost} ₽`);
// console.log(`Итоговая стоимость: ${totalCost} ₽`);
// console.log(`Тип результата: ${resultType}`);

// //Задание намбер ту. 2 задание
// console.log(`Четное ли количество для числа (24): ${24 % 2 === 0}`);
// console.log(`Четное ли количество для числа (7): ${7 % 2 === 0}`);

// //Задание 3

// const randomID = Math.floor(Math.random() * 100) + 1;
// const isInRange = randomID >= 1 && randomID <= 100;

// console.log('Генерация случайного ID ');
// console.log(`Сгенерированный ID: ${randomID}`);
// console.log(`ID в диапазоне 1-100: ${isInRange}`);
// console.log(`Проверка: ${randomID} >= 1 и ${randomID} <= 100 → ${isInRange}`);



// //Задание 4
// const transactionID = 9999999999999999n;
// const newTransactionID = transactionID + 1n;
// const resultType = typeof newTransactionID;

// console.log('BigInt для больших чисел');
// console.log(`Исходный ID: ${transactionID}`);
// console.log(`ID после прибавления 1n: ${newTransactionID}`);
// console.log(`Тип результата: ${resultType}`);

// //Задание 5
// const question = "Are you ready?";
// const answer = "yes!";

// const dialog = question + "\n" + answer.toUpperCase();
// const dialogLength = dialog.length;

// console.log('Форматирование диалога');
// console.log(dialog);
// console.log(`Длина диалога: ${dialogLength} символов`);
// console.log('\n Детализация ');
// console.log(`Вопрос: "${question}" (длина: ${question.length})`);
// console.log(`Ответ: "${answer}" → "${answer.toUpperCase()}" (длина: ${answer.length})`);
// console.log(`Символ переноса строки "\\n" учитывается в длине`);



// //практическая 3 
// let remainingTime;
// console.log(`Переменная создана. Значение: ${remainingTime}`);

// const userDistance = Number(prompt("Введите расстояние до пункта назначения (км):"));
// const userSpeed = Number(prompt("Введите комфортную скорость (км/ч):"));
 
// remainingTime = Math.round((userDistance / userSpeed) * 60);
// console.log(`Осталось минут: ${remainingTime}! Скорость: ${userSpeed} км/ч. Расстояние: ${userDistance} км.`);

// const elapsedTime = Math.round(remainingTime / 2);
// remainingTime = Math.round(remainingTime / 2);
// const remainingDistance = Math.round(userDistance /  2);
// console.log(`Прошло ${elapsedTime} минут.`);
// console.log(`Осталось минут: ${remainingTime}! Скорость: ${userSpeed} км/ч. Расстояние: ${remainingDistance} км.`);

// 4 практическая
// console.log("=== Проверка на кредит ===");

// const userAgeInput = prompt("Введите ваш возраст:");
// const userIncomeInput = prompt("Введите ваш доход (₽):");
// const userDelinquencyInput = prompt("Есть ли просроченные платежи? (да/нет):");

// const userAge = Number(userAgeInput);
// const userIncome = Number(userIncomeInput);

// let userDelinquency;
// if (userDelinquencyInput) {
//     userDelinquency = userDelinquencyInput.toLowerCase() === "да" ? true : false;
// } else {
//     userDelinquency = true; 
// }

// console.log(`Ваш возраст: ${userAge}, Ваш доход: ${userIncome}, Просрочки: ${userDelinquency}`);

// if (userAge >= 21 && userAge <= 65 && userIncome > 50000 && userDelinquency === false) {
//     alert("Кредит одобрен!");
//     console.log("Кредит одобрен!");
// } else {
//     alert("Кредит отклонён");
//     console.log("Кредит отклонён");
//     console.log("");

//     if (!(userAge >= 21 && userAge <= 65)) {
//         console.log("Причина отказа: Возраст должен быть от 21 до 65 лет");
//     }
    
//     if (!(userIncome > 50000)) {
//         console.log("Причина отказа: Доход должен быть больше 50 000 ₽");
//     }
    
//     if (!(userDelinquency === false)) {
//         console.log("Причина отказа: Есть просроченные платежи");
//     }
// }


// //Практическая 5
// function isVip(purchase) {
//     return purchase > 20;
// }

// function getDiscount(purchase, total) {
//     if (isVip(purchase) && total > 1000) {
//         return total * 0.1;
//     }
//     return 0;
// }

// function getTotalPrice(discount, total) {
//     return total - discount;
// }

// function formatPrice(name, price) {
//     return name + ", стоимость заказа: " + price + " ₽";
// }

// function getUserData() {
//     let userName;
//     let purchase;
    
//     while (true) {
//         userName = prompt("Введите ваше имя:");
//         if (userName && userName.trim() !== "") {
//             break;
//         }
//         alert("Имя не может быть пустым.");
//     }
    
//     while (true) {
//         const input = prompt("Введите количество совершенных покупок:");
//         purchase = Number(input);
//         if (!isNaN(purchase) && purchase >= 0 && input !== null && input.trim() !== "") {
//             break;
//         }
//         alert("Введите корректное число покупок (0 или больше).");
//     }
    
//     return { userName, purchase };
// }

// function initDiscountCalculator() {
//     const currentTotal = 1500;
//     const userData = getUserData();
//     const discount = getDiscount(userData.purchase, currentTotal);
//     const finalPrice = getTotalPrice(discount, currentTotal);
//     const result = formatPrice(userData.userName, finalPrice);
//     return result;
// }

// const resultPrice = initDiscountCalculator();
// console.log(resultPrice);













// //Практическая 6
// const fib = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   let prev = 0;    
//   let current = 1; 
//   let next;

//   for (let i = 2; i <= n; i++) {
//     next = prev + current; 
//     prev = current;        
//     current = next;        
//   }

//   return current;
// };

// console.log(fib(3));  
// console.log(fib(5));  
// console.log(fib(10)); 
// console.log(fib(0));  
// console.log(fib(1));  
// console.log(fib(7));  

// //Практическая 7
// function getWeekends(format = 'long') {
//   if (format === 'short') {
//     return ['sat', 'sun'];
//   }
//   return ['saturday', 'sunday'];
// }

// // Тестирование функции
// console.log(getWeekends('long')); // ['saturday', 'sunday']
// console.log(getWeekends()); // ['saturday', 'sunday'] (по умолчанию)
// console.log(getWeekends('short')); // ['sat', 'sun']

//Практическая 8 
// function randomInteger(min, max) {
//   if (min > max) {
//     let temp = min;
//     min = max;
//     max = temp;
//   }
  
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomInteger(1, 10));
// console.log(randomInteger(20, 30));
// console.log(randomInteger(50, 100));



// //практическая 9
// function pow(x, n) {
//     // Валидация входных данных
//     if (typeof x !== 'number' || typeof n !== 'number') {
//         throw new Error('Оба аргумента должны быть числами');
//     }
    
//     if (!Number.isInteger(n)) {
//         throw new Error('Степень должна быть целым числом');
//     }
    
//     // Обработка специальных случаев
//     if (n === 0) return 1;
    
//     let result = 1;
//     const absN = Math.abs(n);
    
//     // Возведение в степень
//     for (let i = 0; i < absN; i++) {
//         result *= x;
//     }
    
//     // Обработка отрицательной степени
//     return n > 0 ? result : 1 / result;
// }

// // Улучшенный ввод с проверкой
// const xInput = prompt('Введите число (x):');
// const nInput = prompt('Введите степень (n) - целое число:');

// if (xInput === null || nInput === null) {
//     console.log('Ввод отменен пользователем');
// } else {
//     const x = Number(xInput);
//     const n = Number(nInput);
    
//     if (isNaN(x) || isNaN(n) || !Number.isInteger(n)) {
//         console.log('Ошибка: некорректный ввод. X должен быть числом, N - целым числом');
//     } else {
//         try {
//             const result = pow(x, n);
//             console.log(`${x} в степени ${n} = ${result}`);
//         } catch (error) {
//             console.log(`Ошибка: ${error.message}`);
//         }
//     }
// }











