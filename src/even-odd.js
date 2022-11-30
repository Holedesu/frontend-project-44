import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i <= 2) {
    const generator = Math.floor(Math.random() * 100);
    const question = `Question: ${generator}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if ((generator % 2 === 0 && answer === 'yes') || (generator % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if ((generator % 2 !== 0 && answer === 'yes')) {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      return console.log(`Let's try again, ${name}!`);
    } else if (generator % 2 === 0 && answer === 'no') {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      return console.log(`Let's try again, ${name}!`);
    } else {
      return console.log('You may type only \'yes\' or \'no\'. Please, try again!');
    }
    i += 1;

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  return null;
};
