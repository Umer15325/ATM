#! /usr/bin/env node
// npx
// ATM
// Modules
import inquirer from "inquirer";
import chalk from "chalk";
// Coding
let myBalance = 15000;
const myPin = 15325;
console.log(" ");
console.log(chalk.bold.italic.whiteBright("PIN: 15325"));
console.log(" ");
let enterPin = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: chalk.underline.magentaBright("Enter Your Pin:") + " "
    }
]);
if (enterPin.userInput === myPin) {
    console.log(chalk.greenBright("CORRECT PIN!"));
    console.log(" ");
    let operation = await inquirer.prompt([
        {
            name: "userInput2",
            type: "list",
            choices: ["Check Balance", "Withdraw", "Fast Cash"],
            message: chalk.underline.magentaBright("Choose an Operation:")
        }
    ]);
    console.log(" ");
    if (operation.userInput2 === "Check Balance") {
        console.log(chalk.yellowBright(`Your Current Balance is: ${myBalance}`));
    }
    else if (operation.userInput2 === "Withdraw") {
        let userWithdraw = await inquirer.prompt([
            {
                name: "userInput3",
                type: "number",
                message: chalk.underline.magentaBright("Enter the amount you want to withdraw:") + " "
            }
        ]);
        if (userWithdraw.userInput3 > myBalance) {
            console.log(chalk.redBright("Entered amount is more than your current balance."));
            console.log(chalk.redBright("Please enter suitable amount!"));
        }
        else {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= userWithdraw.userInput3}`));
        }
    }
    else if (operation.userInput2 === "Fast Cash") {
        let userFastCash = await inquirer.prompt([
            {
                name: "userInput4",
                type: "list",
                choices: ["500", "1000", "5000"],
                message: chalk.underline.magentaBright("Choose the amount you want to withdraw:")
            }
        ]);
        if (userFastCash.userInput4 === "500") {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= 500}`));
        }
        else if (userFastCash.userInput4 === "1000") {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= 1000}`));
        }
        else if (userFastCash.userInput4 === "5000") {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= 5000}`));
        }
    }
}
else {
    console.log(chalk.redBright("WRONG PIN!"));
}
