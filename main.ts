#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, // BASE CURRENCY
  CAD: 1.37,
  EURO: 0.93,
  GBP: 0.79,
  PKR: 279.09,
};

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Select From Currency",
            type: "list",
            choices: ["USD", "CAD", "EURO", "GBP", "PKR"]
        },
        {
            name: "to",
            message: "Select To Currency",
            type: "list",
            choices: ["USD", "CAD", "EURO", "GBP", "PKR"],
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number" 
        }
    ]
);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount 
let baseAmount = amount / fromAmount     // USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

