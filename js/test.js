
// hm1
// function makeTransaction(quantity, pricePerDroid) {
//    const totalPrice = quantity * pricePerDroid;
//    const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//    return message;
// }

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));



// hm2
// function getShippingMessage(country, price, deliveryFee) {
//    const totalPrice = price + deliveryFee;
//    const message = `Shipping to ${country} will cost ${totalPrice} credits`;
//    return message;
// }

// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));



// hm3
// function getElementWidth(content, padding, border) {
// const isContentNumber = Number.parseFloat(content);
// const isPaddingNumber = Number.parseFloat(padding);
// const isBorderNumber = Number.parseFloat(border);
// const totalWidth = isContentNumber + 2 * isPaddingNumber + 2 * isBorderNumber;

//     return totalWidth;
// }

// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));



/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 20;
// let message;

// function foo() {
//     if(minutes > 0) {
//         message = `${hours} г. ${minutes} хв.`;
//     } else {
//         message = `${hours} г.`;
//     }
// }

// foo()


// if(minutes > 0) {
//     message = `${hours} г. ${minutes} хв.`;
// } else {
//     message = `${hours} г.`;
// }


// const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(message);









/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. 
 * Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const days = 1;

// if(days === 0) {
//     console.log("Today");
// } else if(days === 1) {
//     console.log("Tomorrow");
// } else if(days === 2) {
//     console.log("Overmorrow");
// } else {
//     console.log("Date in the future");
// }







/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const days = 1;

// switch(days) {
//     case 0:
//         console.log("Today");
//         break;
//     case 1:
//         console.log("Tomorrow");
//         break;
//     case 2:
//         console.log("Overmorrow");
//         break;
//     default:
//         console.log("Date in the future");
// }







/*
 * Напиши скрипт выбора опції доставки товару.
 * Опция зберігається у змінній option: 1 - самовывоз, 2 - курьер, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Курьер доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправленна сьогодні'
 * - 'Вам передзвонить менеджер'
 */

// const option = 5;
// let message;

// switch(option) {
//     case 1:
//         message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
//         break;
//     case 2:
//         message = 'Курьер доставить замовлення завтра з 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'Посилка буде відправленна сьогодні';
//         break;
//     default:
//         message = 'Вам передзвонить менеджер';
// }

// console.log(message);





// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "vip";
                    
// const canConntent = sub === "pro" || sub === "vip";
// console.log("дозволено доступ?", canConntent);





// less 3

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canChat = isFriend && isOnline && !isDnd;
// console.log("Можна відкрити чат?", canChat);

// const mes;
// const str = mes.slice(0, 5);
// const add = mes.includes("sam");
// = mes.indexOf("f");
// console.log(str);

// let link "https://www.edu.goit.global/uk/learn/14872431/18936918/19420981/homework";
// if (!link.endsWith("/")) {
//    link += "/";

// }
// console.log(link);

// let link "https://www.edu.goit.global/uk/learn/14872431/18936918/19420981/homework";
// if (!link.endsWith("/") && link.includes("edu.goit")) {
//    link += "/";
// }
// console.log(link);



/**
 * Форматування посилання
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = "https://my-site.ua/about";

// if(!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);






/**
 * Форматування посилання
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */


// let link = "https://my-site.ua/about/";


// if(!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }

// console.log(link);



// ____________

// m2 l3

/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */


// const a = 20;
// const b = 100;

// for(let i = a; i < b; i++) {
//   if(!(i % 5)) {
//     console.log(i);
//   }
// }


// for(let i = b; i >= a; i--) {
//     if(!(i % 5)) {
//       console.log(i);
//     }
// }




/**
 * Форматування посилання
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = "https://my-site.ua/about";

// if(!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);






/**
 * Форматування посилання
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */


// let link = "https://my-site.ua/about/";


// if(!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }

// console.log(link);




/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */


// const a = 20;
// const b = 100;

// for(let i = a; i < b; i++) {
//   if(!(i % 5)) {
//     console.log(i);
//   }
// }


// for(let i = b; i >= a; i--) {
//     if(!(i % 5)) {
//       console.log(i);
//     }
// }





/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 0;
// const max = 5;
// let total = 0;

// for(let i = min; i <= max; i++) {
//   if(i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

// for(let i = min; i <= max; i++) {
//   if(i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);


// -------------------------------------------------------


// function foo() {
//   for(let i = 0; i < 5; i++) {
//     if(i === 3) {
//       break;
//     }
//     console.log(i);
//   }
// }


// const lalala = foo();
// console.log("lalala", lalala);


// _________________
// m2 l4
/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 0;
// const max = 5;
// let total = 0;

// for(let i = min; i <= max; i++) {
//   if(i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

// for(let i = min; i <= max; i++) {
//   if(i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);


// -------------------------------------------------------


// function foo() {
//   for(let i = 0; i < 5; i++) {
//     if(i === 3) {
//       break;
//     }
//     console.log(i);
//   }
// }


// const lalala = foo();
// console.log("lalala", lalala);
