let counter = 0;

increment = () => {
    return counter++
}

setInterval(() => {
    console.log(increment(counter));
  }, 2000);