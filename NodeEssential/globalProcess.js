// console.log(process.cpuUsage());
// console.log(process.versions.node);

// console.log(process.argv);

//let [,,firstName, lastName]=process.argv;

//console.log(`Your name is ${firstName} ${lastName}`);

const grab = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab('--greeting');
const user = grab('--user');

console.log(`${greeting} to ${user}`);