#! /usr/bin/env node


// npx atm_15325

                             // ATM

// Modules
import inquirer from "inquirer";
import chalk from "chalk";

                        // Coding

// declaring balance and pin                        
let myBalance = 15000;
const myPin = 15325;

// printing right to use through npx
console.log(" ");
console.log(chalk.bold.italic.whiteBright("PIN: 15325"));
console.log(" ");

// asking for pin user
let enterPin = await inquirer.prompt(
[
    {
        name : "userInput",
        type : "number",
        message : chalk.underline.magentaBright("Enter Your Pin:") + " "
    }
]
)

// if user enter the correct pin
if(enterPin.userInput === myPin)
{
    console.log(chalk.greenBright("CORRECT PIN!"));
    console.log(" ");
     
    // asking the user to select an operation
    let operation = await inquirer.prompt(
        [
            {
                name : "userInput2",
                type : "list",
                choices : ["Check Balance","Withdraw","Fast Cash"],
                message : chalk.underline.magentaBright("Choose an Operation:")
            }
        ]
    )

    console.log(" ");


    // if user choose "check balance" option
    if(operation.userInput2 === "Check Balance")
    {
        console.log(chalk.yellowBright(`Your Current Balance is: ${myBalance}`));
    }

    // if user choose "withdraw" option
    else if(operation.userInput2 === "Withdraw")
    {
        let userWithdraw = await inquirer.prompt(
            [
                {
                    name : "userInput3",
                    type : "number",
                    message : chalk.underline.magentaBright("Enter the amount you want to withdraw:") + " "
                }
            ]
        ) 

        // if user enter the amount more than current balance
        if(userWithdraw.userInput3 > myBalance)
        {
            console.log(chalk.redBright("Entered amount is more than your current balance."));
            console.log(chalk.redBright("Please enter suitable amount!"));
            
        }

        // remaining amount after withdraw
        else
        {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= userWithdraw.userInput3}`));
        }
    }


    // if user choose "fast cash" option
    else if(operation.userInput2 === "Fast Cash")
    {
        let userFastCash = await inquirer.prompt(
            [
                {
                    name : "userInput4",
                    type : "list",
                    choices : ["500","1000","5000"],
                    message : chalk.underline.magentaBright("Choose the amount you want to withdraw:")
                }
            ]
        )

        // when user withdraw 500
        if(userFastCash.userInput4 === "500")
        {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= 500}`))
        }

        // when user withdraw 1000
        else if(userFastCash.userInput4 === "1000")
        {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= 1000}`))
        }

        // when user withdraw 5000
        else if(userFastCash.userInput4 === "5000")
        {
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance -= 5000}`))
        }
    }
}


// if user enter the wrong pin
else
{
    console.log(chalk.redBright("WRONG PIN!"));
}