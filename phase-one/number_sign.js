function getNumberSign(a){

if (a == 0){
    return 'zero';
}
else if (a >= 0){
    return 'positive';
}

else {
    return 'negative';
}
}
console.log(getNumberSign(-1));

//what is the reason for having to print console.log