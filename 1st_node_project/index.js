const chalk = require('chalk');
log = console.log;

// log("ram");

console.log(chalk.blue("hii how are you") + " and " + chalk.red.bgBlue(" how are you doing ") + " and " + chalk.green.bgRed.bold("I ama doing great what about you.")) ;

console.log(chalk.red.underline.bold('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

console.log((`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`))

// Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

