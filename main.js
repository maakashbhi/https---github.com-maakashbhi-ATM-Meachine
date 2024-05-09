#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
// this is my pin
let myPin = 22881;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Valid Password",
        type: "number",
    }
]);
//for checking pin
if (pinanswer.pin === myPin) {
    console.log("Correct Password, wait for the next process");
    let operation = await inquirer.prompt([
        {
            name: "process",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "fastcash", "check balance"]
        }
    ]);
    // for withdraw option
    if (operation.process === "withdraw") {
        let withdraw = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter the amount",
                type: "number",
            }
        ]);
        //for limited cash
        if (withdraw.amount <= myBalance) {
            myBalance -= withdraw.amount;
            console.log("Your remaining balance is " + myBalance);
        }
        else {
            console.log("Withdrawal amount exceeds the balance.");
        }
    }
    if (operation.process === "fastcash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastCashAmount",
                message: "Please select the amount",
                type: "list",
                choices: [
                    "1000",
                    "2000",
                    "5000",
                    "7000",
                    "10000",
                    "15000"
                ]
            }
        ]);
        const selectedAmount = (fastcash.fastCashAmount);
        if (selectedAmount) {
            if (selectedAmount <= myBalance) {
                myBalance -= selectedAmount;
                console.log("Withdrawn successfully: " + myBalance);
            }
            else {
                console.log("Insufficient balance.");
            }
        }
        else {
            console.log("Invalid amount selected.");
        }
    }
    if (operation.process === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Incorrect Password, access denied");
}
