const lowercaseMessage = (message) => {
    return message.toLowerCase();
}
console.log(lowercaseMessage('HELLO'))

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform('WHY ARE YOU SHOUTING?',lowercaseMessage))
