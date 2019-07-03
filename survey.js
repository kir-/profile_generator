const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const askQuestions = (n = 0, info = []) => {
  let questions = [
    'What\'s your name? Nicknames are also acceptable :) ',
    'What\'s an activity you like doing? ',
    'What do you listen to while doing that? ',
    'Which meal is your favourite (eg: dinner, brunch, etc.) ',
    'What\'s your favourite thing to eat for that meal? ',
    'Which sport is your absolute favourite? ',
    'What is your superpower? In a few words, tell us what you are amazing at! ',
  ];
  if (n >= questions.length) {
    console.log('Survey Answers:');
    console.log((info.splice(0,info.length).join('')));
    rl.close();
    return;
  }
  
  rl.question(questions[n], (answer) => {
    info.push(answer + "\n");
    askQuestions(n + 1, info);
  });
  
};


askQuestions();

