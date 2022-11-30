import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let i = 0;

  while (i <= 3) {
    const generator1 = Math.floor(Math.random() * 100);

    const generator2 = Math.floor(Math.random() * 50);

    const signsArr = ['+', '-', '*'];

    const signsArrRand = Math.floor(Math.random() * signsArr.length);

    const summ = generator1 + generator2;
    console.log(summ + ' only for record');
    const subtract = generator1 - generator2;
    console.log(subtract + ' only for record');
    const mult = generator1 * generator2;
    console.log(mult + ' only for record');
    const question = `Question: ${generator1} ${signsArr[signsArrRand]} ${generator2} `;

    console.log(question);

    const answer = readlineSync.question('Your answer: ');

    if (((question[13] || question[12]) === '+') && answer === summ.toString()) {
      console.log('Correct!');
    } else if (((question[13] || question[12]) === '-') && answer === subtract.toString()) {
      console.log('Correct!');
    } else if (((question[13] || question[12]) === '*') && answer === mult.toString()) {
      console.log('Correct!');
    }

    if ((answer !== summ.toString()) && ((question[13] || question[12]) === '+')) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${summ}.`);
      return console.log(`Let's try again, ${name}!`);
    } if ((answer !== subtract.toString()) && ((question[13] || question[12]) === '-')) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${subtract}.`);
      return console.log(`Let's try again, ${name}!`);
    } if ((answer !== mult.toString()) && ((question[13] || question[12]) === '*')) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${mult}.`);
      return console.log(`Let's try again, ${name}!`);
    }

    i += 1;

    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  return null
};
