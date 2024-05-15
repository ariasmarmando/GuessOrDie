function game(){
    let input = prompt("num 1 - 6");

    let rolled = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${rolled}`);
    if(input == rolled){
        console.log(`You answered ${input}`);
        console.log(`The answer was ${rolled}`);
        console.log('You are the winner!')
    }
}