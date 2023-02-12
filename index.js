// 1 Вопрос
let clean=40000
let vocal=22000
console.log(clean+vocal);

// 2 Вопрос
let word="Владивосток";
let num="2000";
console.log(word+" " +num);

// 3 вопрос
let message1=128;
let photo=254;
let vk=137;
let youtube=201;
console.log(message1+photo+vk+youtube);

// 4 вопрос
console.log(2 ** 5); // 32

// 5 вопрос
console.log('Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!')

// 6 вопрос
const greetings = "Привет";
const name = "Кот";
console.log(greetings+','+name)

// 7 вопрос
let time;
time=34;
console.log('Старт поездки. Осталось минут: ' + time);
time-=15
console.log('Немного сторис в соцсетях. Осталось минут: ' + time);
time-=10
console.log('Немного не новостей, но событий. Осталось минут: ' + time);
time=0;
console.log('Вы приехали. Добро пожаловать в Москву ');

// 8 вопрос
let fahrenheit=451;
let celsius=(fahrenheit-32)/1.8;
console.log(fahrenheit+'градуса по Фаренгейту — это'+' '+ celsius.toFixed(2) +" " +'градуса по Цельсию.')

// Вопрос со звездочкой (добавляю только часть javaScript, так как меняем только в этой части код)
const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let message;

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency}`); // Ваш депозит на начало расчетного периода составлял 30000 руб

console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate + "%"}`); // Согласно вашему тарифу, вам была присвоена ставка 18.5%

console.log(`К концу расчётного периода прирост составил ${growth + " " + currency}., и на данный момент ваш депозит составляет ${Number(deposit) + +growth +" "+currency}.`); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  total.textContent = (`Через год у вас будет ${sum*1.07} руб. на счету`); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});
