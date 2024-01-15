// Для заданного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 23) {
    break;
  }
  if (!(numbers[i] % 2)) {
    console.log(numbers[i]);
  }
}
// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [
  { name: "Jack", surname: "Smith" },
  { name: "Bob", surname: "Summers" },
  { name: "Sarah", surname: "Gold" },
  { name: "Susan", surname: "Vega" },
  { name: "Mary", surname: "Roberts" },
];

for (let i = 0; i < people.length; i++) {
  console.log(
    ` <li><h1>Hello ${people[i].name} ${people[i].surname}</h1></li>`
  );
}

// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

function evenOrOdd(start, end) {
  for (let i = start; i >= start && i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(`${i} - нечетное число`);
    } else {
      console.log(`${i} - четное число`);
    }
  }
}

evenOrOdd(-10, 25);

// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

function theBiggestNumber(a, b, c) {
  let number = 0;
  //   if (a > number) {
  //     number = a;
  //   }
  //   if (b > number) {
  //     number = b;
  //   }
  //   if (c > number) {
  //     number = c;
  //   }
  //   return number;

  let arr = [a, b, c];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      number = arr[i];
    }
  }
  return number;
}

console.log(theBiggestNumber(10, 205, 38));

// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка

for (let i = 1; i >= 1 && i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log(`${i} FIZZ BUZZ`);
  } else if (!(i % 3)) {
    console.log(`${i} FIZZ `);
  } else if (!(i % 5)) {
    console.log(`${i} BUZZ`);
  }
}
