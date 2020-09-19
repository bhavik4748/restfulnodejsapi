const questions = [
    "Question 1",
    "Question 2",
    "Qustion 3"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(`>`);
}
ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(`\n\n ${data.toString().trim()} \n`);

    if (questions.length > answers.length)
        ask(answers.length);
    else
        process.exit();
})

process.on('exit', () => {
    const [ans1, ans2, ans3] = answers;
    process.stdout.write(`
 Your answers are: ${ans1} ${ans2} ${ans3}
`);
});