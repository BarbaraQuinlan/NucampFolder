function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + ' ');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        } else if (roll === 4 && goldCoins !== 0) {
            goldCoins = goldCoins - 1;
        }
        if (roll < 5) {
            continue;
        }
        
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins!\n\n You have won a total of ' + goldCoins + ' gold coins!');
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}