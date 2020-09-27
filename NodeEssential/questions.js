const { EventEmitter } = require('events');

const questions = [
    "what's your name?",
    "what's your home city?",
    "where are you planning to go next?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(`>`);
}
ask();

const answers = [];
const emitter = new EventEmitter();
process.stdin.on("data", data => {
    answers.push(`\n\n ${data.toString().trim()} \n`);

    if (questions.length > answers.length) {
        ask(answers.length);
        emitter.emit('answer', answers[answers.length -1]);

    }
    else
        process.exit();
})

const answerEvents = process.on('exit', () => {
    const [ans1, ans2, ans3] = answers;

    process.stdout.write(`
 Your answers are: ${ans1} ${ans2} ${ans3}
`);



});

emitter.on('answer', answer => {
    console.log(answer);
})