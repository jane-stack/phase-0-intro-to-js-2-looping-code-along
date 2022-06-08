function writeCards(names, event) {
    const message = [];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
    
}

console.log(writeCards(["Gaudalupe", "Ollie", "Aki"], "surprise"));

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
    return countDown;
}
console.log(countDown());