import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
async function Guess() {
    let attempt = 5;
    let score = 0;
    while (attempt) {
        let Random_Number = Math.floor(Math.random() * 5 + 1);
        let input = await inquirer.prompt([{
                name: "Num",
                type: "number",
                message: "Guess The Number from 1 to 5 "
            }]);
        if (Random_Number == input.Num) {
            score += 10;
            console.log(chalk.green("You Guess The Right Number "));
        }
        else if (Random_Number < input.Num) {
            console.log(chalk.blue("Your Guess is high"));
            attempt--;
            console.log(attempt, 'attempt left');
        }
        else if (Random_Number > input.Num) {
            console.log(chalk.blue("Your Guess Is low"));
            attempt--;
            console.log(attempt, ' Try left');
        }
        else {
            console.log(chalk.red("YOU LOSE"));
            attempt--;
            console.log(attempt, ' Try left');
        }
    }
    console.log(chalk.yellow(`Your Total Score is ${score}`));
}
async function medium() {
    do {
        await Guess();
        var again = await inquirer.prompt([
            {
                type: 'input',
                name: "restart",
                message: "If you want to Play again press Y:  "
            }
        ]);
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "yes");
    { }
    if (again.restart == "no") {
        const sleep = () => {
            return new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
        };
        async function welcome() {
            var by = chalkAnimation.rainbow("Thanks for Playing");
            await sleep();
            by.stop();
        }
        welcome();
    }
}
export { medium };
