
import prompt from "inquirer/lib/ui/prompt.js";
import inquirer from "inquirer";
import { hard  } from "./hard.js";
import chalk from 'chalk'
import chalkanimated from'chalk-animation'
import {   medium } from "./medium.js";


import Choice from 'inquirer/lib/objects/choice.js';
import Choices from 'inquirer/lib/objects/choices.js';
import figlet from'figlet'

figlet.defaults({ fontPath: "assets/fonts" });



function ready() {
    console.log(chalk.green(figlet.textSync('Guess Game')));


}

ready()

const question =  async()=> {
    const operators =  await inquirer.prompt([
        {
            name: 'choose_operations',
            type: 'list',
            message: 'Choose Your Difficulty!\n',
            choices: [
                'HARD',
                'MEDIUM',
                ]
                
}])


var a=(operators.choose_operations)


switch (a) {
    case "HARD":
        const sleep=async ()=>{

            return new Promise((resolve) => {
                
        
                setTimeout(resolve,1000)
            })
        }
        const welcome=async ()=>{

    const user=chalkanimated.rainbow(`You Chose  Hard Difficulty `);

    await sleep()

    user.stop()
}  

await welcome()
        result: hard()
        break;
        case "MEDIUM":
            const sleep1=async ()=>{

                return new Promise((resolve) => {
                    
            
                    setTimeout(resolve,1000)
                })
            }
            const welcome1=async ()=>{
    
        const user=chalkanimated.rainbow(`You Chose  Medium Difficulty `);
    
        await sleep1()
    
        user.stop()
    }  
    
    await welcome1()

            result:medium()
            break;
           


    default:
        console.log(chalk.red("Some thing Went Wrong ! "));
        
        break;
}

}

question()