#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.blue(`Guess a Number between (1-6) `),
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.green("Congtratulation! You Win "));
}
else {
    console.log(chalk.red("You Guessed Wrong Number. You Loss"));
}
