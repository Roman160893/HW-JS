let firstNumber;
do {
   firstNumber = +prompt('Введіть число від якого ми почемо рахувати')
} while (!Number.isInteger(firstNumber) || firstNumber < 0);

let secondNumber;
do {
   secondNumber = +prompt('Введіть число до якого ми будемо рахувати')
} while (!Number.isInteger(secondNumber) || secondNumber < 0 || secondNumber < firstNumber);

let skipEvenNumber = confirm('Чи будемо пропускати парні числа?');

let sumNumber = 0;
for (let i = firstNumber; i <= secondNumber; i++) {
   if (!skipEvenNumber) {
      sumNumber += i;
   } else {
      if (i % 2 !== 0) {
         sumNumber += i;
      }
   }
};

alert(`Сума чисел = ${sumNumber}`)