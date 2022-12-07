import readlineSync from 'readline-sync';
import {
  isPrime,
  greeting,
  celeb,
} from './index.js';

export default () => {
  let i = 0;
  const name = greeting();

  while (i <= 2) {
    const generator1 = Math.floor(Math.random() * 100);
    const question = `Question: ${generator1}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if ((isPrime(generator1) === true && answer === 'yes') || (isPrime(generator1) === false && answer === 'no')) {
      console.log('Correct!');
    } else if (isPrime(generator1) === true && answer === 'no') {
      return console.log('"no" is wrong answer ;(. Correct answer was "yes"');
    } else if (isPrime(generator1) === false && answer === 'yes') {
      return console.log('"yes" is wrong answer ;(. Correct answer was "no"');
    } else {
      return console.log('You should type only yes or no');
    }

    i += 1;
    if (i === 3) {
      celeb(name);
    }
  }
  return null;
};
