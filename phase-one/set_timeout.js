const printMessage = () => {
    console.log('Hello there');
}
console.log(setTimeout(printMessage, 20000));

//print message is referred to as a callback function as it won't be called unless setimeout function calls it