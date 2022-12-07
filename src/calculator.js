import readlineSync from 'readline-sync';

import { calcCond } from './index.js'

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let i = 0;

  while (i <= 2) {
    const generator1 = Math.floor(Math.random() * 100);

    const generator2 = Math.floor(Math.random() * 50);

    const signsArr = ['+', '-', '*'];

    const signsArrRand = Math.floor(Math.random() * signsArr.length);

    const summ = generator1 + generator2;

    const subtract = generator1 - generator2;

    const mult = generator1 * generator2;

    const question = `Question: ${generator1} ${signsArr[signsArrRand]} ${generator2} `;

    console.log(question);

    const answer = readlineSync.question('Your answer: ');

    if (((question[13] || question[12]) === '+') && answer === summ.toString()) {
      console.log('Correct!');
    } else if (((question[13] || question[12]) === '-') && answer === subtract.toString()) {
      console.log('Correct!');
    } else if (((question[13] || question[12]) === '*') && answer === mult.toString()) {
      console.log('Correct!');
    }1

    if ((answer !== summ.toString()) && ((question[13] || question[12]) === '+')) {
      calcCond();
    } if ((answer !== subtract.toString()) && ((question[13] || question[12]) === '-')) {
      calcCond();
    } if ((answer !== mult.toString()) && ((question[13] || question[12]) === '*')) {
      calcCond();
    }

    i += 1;

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  return null;
};
